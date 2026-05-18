// ===================== STATE =====================
const selected = {};          // componentId → quantity (stage)
const selectedServices = {};  // serviceId → quantity (services)
const selectedProducts = {};  // productId → quantity (products)
// partners is defined in data.js
let selectedPartner = null;   // current partner object or null
let showFinancialDetails = localStorage.getItem('showFinancialDetails') === 'true';
let searchQuery = '';
// ===================== HELPERS =====================
function getMat(id) {
    return materials.find(m => m.id === id);
}

function fmt(value) {
    return '$' + value.toLocaleString('pt-BR');
}

function getImgSrc(id) {
    const mat = materials.find(m => m.id === id);
    if (mat) return mat.image;
    const comp = components.find(c => c.id === id);
    if (comp) return comp.image;
    const svc = services.find(s => s.id === id);
    if (svc && svc.image) return svc.image;
    const prod = products.find(p => p.id === id);
    if (prod && prod.image) return prod.image;
    return '';
}

function totalSelectedCount() {
    return Object.keys(selected).length +
        Object.keys(selectedServices).length +
        Object.keys(selectedProducts).length;
}

// ===================== INIT PARTNERS =====================
function initPartners() {
    const select = document.getElementById('partnerSelect');
    partners.forEach((p, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${p.name} (${p.discount}%)`;
        select.appendChild(opt);
    });
}

// ===================== ACCORDION =====================
function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.accordion');
            const content = accordion.querySelector('.accordion-content');
            const arrow = header.querySelector('.accordion-arrow');

            const isOpen = content.classList.contains('open');
            content.classList.toggle('open', !isOpen);

            if (isOpen) {
                arrow.style.transform = 'rotate(-90deg)';
            } else {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Set initial arrow states
    document.querySelectorAll('.accordion-content').forEach(content => {
        const arrow = content.previousElementSibling.querySelector('.accordion-arrow');
        if (!content.classList.contains('open')) {
            arrow.style.transform = 'rotate(-90deg)';
        }
    });
}

// ===================== RENDER SIDEBAR =====================
function renderSidebar() {
    renderStageList();
    renderServicesList();
    renderProductsList();
    updateAccordionCounts();
}

function renderStageList() {
    const list = document.getElementById('stageList');
    list.innerHTML = '';

    const stages = [1, 2, 3];
    stages.forEach(stage => {
        const stageComps = components.filter(c => 
            c.stage === stage && 
            (searchQuery === '' || c.name.toLowerCase().includes(searchQuery))
        );
        if (stageComps.length === 0) return;

        const stageHeader = document.createElement('div');
        stageHeader.className = 'stage-header';
        stageHeader.innerHTML = `<span class="stage-badge stage-${stage}">S${stage}</span> Stage ${stage}`;
        list.appendChild(stageHeader);

        stageComps.forEach(comp => {
            const row = createItemRow(comp, selected, comp.sellPrice, comp.id);
            list.appendChild(row);
        });
    });

    bindQtyButtons(list, selected);
}

function renderServicesList() {
    const list = document.getElementById('servicesList');
    list.innerHTML = '';

    const filteredServices = services.filter(svc => 
        searchQuery === '' || svc.name.toLowerCase().includes(searchQuery)
    );

    if (filteredServices.length === 0) {
        list.classList.add('empty-category');
        const msg = document.createElement('div');
        msg.className = 'accordion-empty-msg';
        msg.textContent = searchQuery === '' ? 'Nenhum serviço disponível' : 'Nenhum serviço encontrado';
        list.appendChild(msg);
        return;
    }

    list.classList.remove('empty-category');

    filteredServices.forEach(svc => {
        const row = createServiceRow(svc);
        list.appendChild(row);
    });

    bindQtyButtons(list, selectedServices);
}

function renderProductsList() {
    const list = document.getElementById('productsList');
    list.innerHTML = '';

    const filteredProducts = products.filter(prod => 
        searchQuery === '' || prod.name.toLowerCase().includes(searchQuery)
    );

    if (filteredProducts.length === 0) {
        list.classList.add('empty-category');
        const msg = document.createElement('div');
        msg.className = 'accordion-empty-msg';
        msg.textContent = searchQuery === '' ? 'Nenhum produto disponível' : 'Nenhum produto encontrado';
        list.appendChild(msg);
        return;
    }

    list.classList.remove('empty-category');
    filteredProducts.forEach(prod => {
        const row = createItemRow(prod, selectedProducts, prod.sellPrice, prod.id);
        list.appendChild(row);
    });

    bindQtyButtons(list, selectedProducts);
}

function createItemRow(item, store, price, id) {
    const row = document.createElement('div');
    row.className = 'item-row' + (store[id] ? ' selected' : '');

    const qty = store[id] || 1;

    row.innerHTML = `
        <span class="item-dot"></span>
        <div class="item-icon">
            <img src="${getImgSrc(id)}" alt="${item.name}" loading="lazy" onerror="this.parentElement.textContent='🔩'">
        </div>
        <div class="item-text">
            <span class="item-name">${item.name}</span>
            <span class="item-sell-price">${fmt(price)}</span>
        </div>
        <div class="item-qty-controls">
            <button class="qty-btn" data-action="dec" data-id="${id}">−</button>
            <span class="qty-display">${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${id}">+</button>
        </div>
    `;

    row.addEventListener('click', (e) => {
        if (e.target.closest('.qty-btn')) return;
        toggleItem(id, store);
    });

    return row;
}

function createServiceRow(svc) {
    const row = document.createElement('div');
    row.className = 'item-row' + (selectedServices[svc.id] ? ' selected' : '');

    const qty = selectedServices[svc.id] || 1;

    const iconHtml = svc.image
        ? `<div class="item-icon"><img src="${svc.image}" alt="${svc.name}" loading="lazy" onerror="this.parentElement.textContent='🔧'"></div>`
        : `<div class="item-icon service-icon-placeholder">🔧</div>`;

    row.innerHTML = `
        <span class="item-dot"></span>
        ${iconHtml}
        <div class="item-text">
            <span class="item-name">${svc.name}</span>
            <span class="item-sell-price">${fmt(svc.price)}</span>
        </div>
        <div class="item-qty-controls">
            <button class="qty-btn" data-action="dec" data-id="${svc.id}">−</button>
            <span class="qty-display">${qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${svc.id}">+</button>
        </div>
    `;

    row.addEventListener('click', (e) => {
        if (e.target.closest('.qty-btn')) return;
        toggleItem(svc.id, selectedServices);
    });

    return row;
}

function updateAccordionCounts() {
    const stageCount = Object.keys(selected).length;
    const servicesCountVal = Object.keys(selectedServices).length;
    const productsCountVal = Object.keys(selectedProducts).length;

    const stageEl = document.getElementById('stageCount');
    const servicesEl = document.getElementById('servicesCount');
    const productsEl = document.getElementById('productsCount');

    stageEl.textContent = stageCount;
    stageEl.dataset.has = stageCount > 0;

    servicesEl.textContent = servicesCountVal;
    servicesEl.dataset.has = servicesCountVal > 0;

    productsEl.textContent = productsCountVal;
    productsEl.dataset.has = productsCountVal > 0;
}

// ===================== SHARED HELPERS =====================
function toggleItem(id, store) {
    if (store[id]) {
        delete store[id];
    } else {
        store[id] = 1;
    }
    renderSidebar();
    renderUnifiedSummary();
}

function bindQtyButtons(container, store) {
    container.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            if (btn.dataset.action === 'inc') {
                store[id] = (store[id] || 1) + 1;
            } else if (store[id] > 1) {
                store[id]--;
            }
            renderSidebar();
            renderUnifiedSummary();
        });
    });
}

// ===================== UNIFIED SUMMARY =====================
function renderUnifiedSummary() {
    const emptyEl = document.getElementById('emptyState');
    const contentEl = document.getElementById('summaryContent');
    const clearBtn = document.getElementById('clearBtn');
    const optionsRow = document.getElementById('optionsRow');

    const stageIds = Object.keys(selected);
    const serviceIds = Object.keys(selectedServices);
    const productIds = Object.keys(selectedProducts);
    const total = stageIds.length + serviceIds.length + productIds.length;

    const rightSidebarList = document.getElementById('selectedItemsList');
    const rightSidebarCount = document.getElementById('selectedTotalCount');

    if (total === 0) {
        emptyEl.style.display = '';
        contentEl.style.display = 'none';
        clearBtn.style.display = 'none';
        optionsRow.style.display = 'none';
        updateTotalBar(0);
        rightSidebarCount.textContent = '0';
        rightSidebarList.innerHTML = '<div class="right-sidebar-empty">Nenhum item selecionado</div>';
        return;
    }

    rightSidebarCount.textContent = total;
    emptyEl.style.display = 'none';
    contentEl.style.display = '';
    clearBtn.style.display = '';
    optionsRow.style.display = 'flex';

    // ---- Build summary list (Right Sidebar) ----
    let rightSidebarHtml = '<div class="selected-summary">';

    if (stageIds.length > 0) {
        rightSidebarHtml += '<div class="summary-group"><span class="summary-group-title">⚙️ Stage</span>';
        stageIds.forEach(compId => {
            const comp = components.find(c => c.id === compId);
            const qty = selected[compId];
            rightSidebarHtml += `<div class="summary-item">
                <span class="summary-item-name">${comp.name}</span>
                <span class="summary-item-qty">×${qty}</span>
                <span class="summary-item-price">${fmt(comp.sellPrice * qty)}</span>
                <button class="summary-item-remove" data-rid="${compId}" data-store="stage">✕</button>
            </div>`;
        });
        rightSidebarHtml += '</div>';
    }

    if (serviceIds.length > 0) {
        rightSidebarHtml += '<div class="summary-group"><span class="summary-group-title">🔧 Serviços</span>';
        serviceIds.forEach(svcId => {
            const svc = services.find(s => s.id === svcId);
            const qty = selectedServices[svcId];
            rightSidebarHtml += `<div class="summary-item">
                <span class="summary-item-name">${svc.name}</span>
                <span class="summary-item-qty">×${qty}</span>
                <span class="summary-item-price">${fmt(svc.price * qty)}</span>
                <button class="summary-item-remove" data-rid="${svcId}" data-store="services">✕</button>
            </div>`;
        });
        rightSidebarHtml += '</div>';
    }

    if (productIds.length > 0) {
        rightSidebarHtml += '<div class="summary-group"><span class="summary-group-title">📦 Produtos</span>';
        productIds.forEach(prodId => {
            const prod = products.find(p => p.id === prodId);
            const qty = selectedProducts[prodId];
            rightSidebarHtml += `<div class="summary-item">
                <span class="summary-item-name">${prod.name}</span>
                <span class="summary-item-qty">×${qty}</span>
                <span class="summary-item-price">${fmt(prod.sellPrice * qty)}</span>
                <button class="summary-item-remove" data-rid="${prodId}" data-store="products">✕</button>
            </div>`;
        });
        rightSidebarHtml += '</div>';
    }

    rightSidebarHtml += '</div>';
    rightSidebarList.innerHTML = rightSidebarHtml;

    // Remove handlers for the right sidebar items
    rightSidebarList.querySelectorAll('.summary-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.rid;
            const storeName = btn.dataset.store;
            if (storeName === 'stage') delete selected[id];
            else if (storeName === 'services') delete selectedServices[id];
            else if (storeName === 'products') delete selectedProducts[id];
            renderSidebar();
            renderUnifiedSummary();
        });
    });

    let html = '';

    // ---- Aggregate materials ----
    const matTotals = {};

    stageIds.forEach(compId => {
        const comp = components.find(c => c.id === compId);
        const qty = selected[compId];
        comp.ingredients.forEach(ing => {
            matTotals[ing.id] = (matTotals[ing.id] || 0) + ing.quantity * qty;
        });
    });

    serviceIds.forEach(svcId => {
        const svc = services.find(s => s.id === svcId);
        const qty = selectedServices[svcId];
        svc.ingredients.forEach(ing => {
            matTotals[ing.id] = (matTotals[ing.id] || 0) + ing.quantity * qty;
        });
    });

    productIds.forEach(prodId => {
        const prod = products.find(p => p.id === prodId);
        const qty = selectedProducts[prodId];
        prod.ingredients.forEach(ing => {
            matTotals[ing.id] = (matTotals[ing.id] || 0) + ing.quantity * qty;
        });
    });

    // ---- Materials grid ----
    html += '<div class="materials-section-title">Materiais Necessários</div>';
    html += '<div class="materials-grid">';

    let totalCost = 0;
    let totalQty = 0;

    Object.keys(matTotals).forEach(matId => {
        const mat = getMat(matId);
        const qty = matTotals[matId];
        const cost = qty * (mat ? mat.price : 0);
        totalCost += cost;
        totalQty += qty;

        html += `
            <div class="material-card anim-in">
                <div class="mat-icon">
                    <img src="${mat ? getImgSrc(mat.id) : ''}" alt="${mat ? mat.name : matId}" loading="lazy" onerror="this.parentElement.textContent='🔹'">
                </div>
                <div class="mat-info">
                    <div class="mat-name">${mat ? mat.name : matId}</div>
                    <div class="mat-qty-row">
                        <span class="mat-qty">${qty.toLocaleString('pt-BR')}</span>
                        <span class="mat-cost">· ${fmt(cost)}</span>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';

    // ---- Calculate totals ----
    const discountPct = parseFloat(document.getElementById('discountInput').value) || 0;

    let totalSellBase = 0;

    stageIds.forEach(compId => {
        const comp = components.find(c => c.id === compId);
        totalSellBase += comp.sellPrice * selected[compId];
    });

    serviceIds.forEach(svcId => {
        const svc = services.find(s => s.id === svcId);
        totalSellBase += svc.price * selectedServices[svcId];
    });

    productIds.forEach(prodId => {
        const prod = products.find(p => p.id === prodId);
        totalSellBase += prod.sellPrice * selectedProducts[prodId];
    });

    const discountAmount = totalSellBase * (discountPct / 100);
    const totalSellRevenue = totalSellBase - discountAmount;
    const mechanicCut = totalSellRevenue * 0.20;
    const netRevenue = totalSellRevenue - mechanicCut;
    const profit = netRevenue - totalCost;

    const financialHiddenClass = showFinancialDetails ? '' : 'hidden';

    // ---- Total bars ----
    html += `
        <div class="totals-grid">
            <div class="total-bar">
                <div class="total-left">
                    <span class="total-label">Custo Materiais</span>
                    <span class="total-items-label">${totalQty.toLocaleString('pt-BR')} materiais refinados</span>
                </div>
                <span class="total-value cost">${fmt(totalCost)}</span>
            </div>
            <div class="total-bar">
                <div class="total-left">
                    <span class="total-label">Venda Bruta</span>
                    <span class="total-items-label">${total} ite${total > 1 ? 'ns' : 'm'}${discountPct > 0 ? ' · base ' + fmt(totalSellBase) + ' − ' + discountPct + '% (−' + fmt(discountAmount) + ')' : ''}</span>
                </div>
                <span class="total-value sell">${fmt(totalSellRevenue)}</span>
            </div>
            <div class="total-bar financial-detail-row ${financialHiddenClass}">
                <div class="total-left">
                    <span class="total-label">Mecânico (20%)</span>
                    <span class="total-items-label">comissão sobre venda</span>
                </div>
                <span class="total-value mechanic">-${fmt(mechanicCut)}</span>
            </div>
            <div class="total-bar profit-bar financial-detail-row ${financialHiddenClass}">
                <div class="total-left">
                    <span class="total-label">Lucro Líquido</span>
                    <span class="total-items-label">venda − mecânico − materiais</span>
                </div>
                <span class="total-value ${profit >= 0 ? 'profit-positive' : 'profit-negative'}">${profit >= 0 ? '+' : ''}${fmt(profit)}</span>
            </div>
        </div>
    `;

    contentEl.innerHTML = html;

    // Handlers mapped previously

    // ---- Update sticky total bar ----
    updateTotalBar(totalSellRevenue);
}

// ===================== TOTAL BAR =====================
function updateTotalBar(totalSellRevenue) {
    const el = document.getElementById('stickyTotalValue');
    el.textContent = fmt(totalSellRevenue);

    if (totalSellRevenue > 0) {
        el.classList.add('has-value');
    } else {
        el.classList.remove('has-value');
    }
}

// ===================== PARTNER HANDLING =====================
function onPartnerChange() {
    const select = document.getElementById('partnerSelect');
    const discountInput = document.getElementById('discountInput');
    const discountField = discountInput.closest('.discount-field');

    if (select.value === '') {
        // No partner selected
        selectedPartner = null;
        discountInput.disabled = false;
        discountInput.value = 0;
        // Remove lock icon
        const lockIcon = discountField.querySelector('.discount-locked-indicator');
        if (lockIcon) lockIcon.remove();
    } else {
        const partner = partners[parseInt(select.value)];
        selectedPartner = partner;
        discountInput.value = partner.discount;
        discountInput.disabled = true;
        // Add lock icon if not present
        if (!discountField.querySelector('.discount-locked-indicator')) {
            const lock = document.createElement('span');
            lock.className = 'discount-locked-indicator';
            lock.textContent = '🔒';
            discountField.appendChild(lock);
        }
    }

    renderUnifiedSummary();
}

// ===================== CLEAR ALL =====================
function clearAll() {
    Object.keys(selected).forEach(k => delete selected[k]);
    Object.keys(selectedServices).forEach(k => delete selectedServices[k]);
    Object.keys(selectedProducts).forEach(k => delete selectedProducts[k]);

    document.getElementById('discountInput').value = 0;
    document.getElementById('partnerSelect').value = '';
    const discountInput = document.getElementById('discountInput');
    discountInput.disabled = false;
    selectedPartner = null;

    // Remove lock icon
    const lockIcon = discountInput.closest('.discount-field').querySelector('.discount-locked-indicator');
    if (lockIcon) lockIcon.remove();

    renderSidebar();
    renderUnifiedSummary();
}

// ===================== INIT =====================
// Init partners dropdown
initPartners();

// Accordion init
initAccordions();

// Partner dropdown
document.getElementById('partnerSelect').addEventListener('change', onPartnerChange);

// Clear button
document.getElementById('clearBtn').addEventListener('click', clearAll);

// Discount input
document.getElementById('discountInput').addEventListener('input', () => {
    renderUnifiedSummary();
});

// Financial toggle — restore saved state
const financialToggleEl = document.getElementById('financialToggle');
financialToggleEl.checked = showFinancialDetails;
financialToggleEl.addEventListener('change', (e) => {
    showFinancialDetails = e.target.checked;
    localStorage.setItem('showFinancialDetails', showFinancialDetails);
    renderUnifiedSummary();
});

// Search functionality
document.getElementById('sidebarSearch').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderSidebar();
    
    // Auto open accordions if there's a search query
    if (searchQuery !== '') {
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (!content.classList.contains('open')) {
                content.classList.add('open');
                const arrow = content.previousElementSibling.querySelector('.accordion-arrow');
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
});

// Initial render
renderSidebar();
renderUnifiedSummary();
