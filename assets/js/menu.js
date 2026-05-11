(function(){
  const panel = document.querySelector('[data-mega-panel]');
  const closeZone = document.querySelector('[data-close-zone]');
  const buttons = document.querySelectorAll('[data-menu-key]');
  if(!panel || !buttons.length) return;

  const menuData = {
    purchasing: [
      ['Purchase Request','Pengajuan kebutuhan barang/jasa dengan budget reservation, cost center, dan approval matrix.'],
      ['Purchase Order','Eksekusi PO dari PR release, siap masuk ke procurement dan invoice verification.'],
      ['Vendor Master','Business partner/vendor, NPWP, bank account, payment term, dan klasifikasi BUMN/Pemerintah/Swasta.'],
      ['Budget Checking','Validasi budget availability control sebelum transaksi dikomit.'],
      ['Document Upload','Lampiran dokumen pendukung untuk pengadaan, verifikasi, dan audit trail.'],
      ['Approval Matrix','Maker-checker dan release strategy berdasarkan level kewenangan.']
    ],
    invoicing: [
      ['Payment Request','Registrasi pengajuan pembayaran dengan lampiran dokumen unit teknis dan keuangan.'],
      ['Outstanding Document','Dokumen yang perlu koreksi atau kelengkapan sebelum lanjut verifikasi.'],
      ['Payment in Process','Dokumen yang sedang berada di verifikasi budget, pajak, atau akuntansi.'],
      ['Payment History','Riwayat dokumen yang sudah berhasil diproses sampai pembayaran.'],
      ['Request Rejection','Dokumen yang tidak disetujui untuk masuk ke proses pembayaran.'],
      ['Tracking Document','Pencarian nomor dokumen untuk mengetahui posisi terakhir secara real-time.'],
      ['Tax Document','Download bukti potong PPN/PPh dan dokumen pajak terkait.']
    ],
    billing: [
      ['Billing List','Daftar tagihan aktif berdasarkan vendor, unit teknis, dan status verifikasi.'],
      ['Payment Aging','Prioritas pembayaran berdasarkan jatuh tempo, aging, dan payment outstanding.'],
      ['Bank Instruction','Instruksi pembayaran multi-bank atau host-to-host.'],
      ['Payment Proof','Bukti bayar dan status callback dari bank.'],
      ['Bank Reconcile','Rules-based matching antara payment dan bank statement.'],
      ['Exception Queue','Transaksi bermasalah untuk koreksi data, pajak, dokumen, atau akun.']
    ],
    report: [
      ['Management Dashboard','Ringkasan cash position, aging, DSO/DPO, dan realisasi anggaran.'],
      ['Budget Report','Monitoring actual vs budget per business area, program segment, dan cost center.'],
      ['Tax Compliance','Ringkasan PPN/PPh dan dokumen pajak.'],
      ['Audit Trail','Jejak approval, perubahan data, dan status dokumen.'],
      ['Raw Data Export','Ekspor data operasional untuk audit dan manajemen.']
    ],
    help: [
      ['User Guide','Panduan penggunaan portal user dan admin.'],
      ['FAQ','Pertanyaan umum terkait registrasi tagihan dan dokumen pendukung.'],
      ['SLA & Support','Informasi kanal support dan target penyelesaian.'],
      ['Integration Status','Status koneksi ERP, SIGASING, SIKESPEN, dan bank.']
    ]
  };

  const grid = panel.querySelector('.mega-grid');
  let activeKey = null;

  function render(key){
    const items = menuData[key] || [];
    grid.innerHTML = items.map(([title, desc]) => `
      <a class="mega-link" href="#" role="menuitem">
        <span class="mega-link-title">${title}</span>
        <span class="mega-link-desc">${desc}</span>
      </a>`).join('');
  }

  function openMenu(btn){
    const key = btn.dataset.menuKey;
    if(activeKey === key && panel.classList.contains('show')) return closeMenu();
    activeKey = key;
    render(key);
    panel.classList.add('show');
    closeZone?.classList.add('show');
    buttons.forEach(b => b.setAttribute('aria-expanded', String(b === btn)));
  }

  function closeMenu(){
    activeKey = null;
    panel.classList.remove('show');
    closeZone?.classList.remove('show');
    buttons.forEach(b => b.setAttribute('aria-expanded','false'));
  }

  buttons.forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); openMenu(btn); }));
  closeZone?.addEventListener('click', closeMenu);
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
})();
