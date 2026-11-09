const details={
"Majapahit dan gagasan persatuan":"Majapahit muncul pada akhir abad ke-13 dan mencapai masa berpengaruh pada abad ke-14. Pusat pemerintahannya berada di Jawa Timur. Nama Majapahit sering dikaitkan dengan tokoh seperti Raden Wijaya, Tribhuwana Tunggadewi, dan Hayam Wuruk. Pada masa Hayam Wuruk, pemerintahan didampingi Mahapatih Gajah Mada. Sumber seperti Nagarakretagama dan prasasti menjadi bahan penting untuk mempelajari kerajaan ini. Gagasan persatuan dalam sejarah Majapahit perlu dipahami sesuai konteks zamannya, bukan disamakan begitu saja dengan negara modern.",

"Borobudur: mahakarya masa lampau":"Candi Borobudur dibangun sekitar abad ke-8 hingga ke-9 di Jawa Tengah, pada masa Wangsa Syailendra. Bangunan bercorak Buddha Mahayana ini memiliki susunan teras bertingkat, relief, dan stupa. Reliefnya menggambarkan ajaran serta kisah kehidupan Buddha. Borobudur menjadi bukti kemampuan masyarakat masa lampau dalam bidang arsitektur, seni pahat, dan pengorganisasian tenaga kerja.",

"Sumpah Pemuda 1928":"Kongres Pemuda II berlangsung pada 27–28 Oktober 1928 di Batavia. Dalam peristiwa ini, para peserta menyatakan ikrar tentang satu tanah air, satu bangsa, dan menjunjung bahasa persatuan, bahasa Indonesia. Sumpah Pemuda menjadi tonggak penting tumbuhnya kesadaran kebangsaan di tengah keberagaman organisasi dan latar daerah.",

"Jalur rempah dan perjumpaan dunia":"Kepulauan Nusantara merupakan penghasil komoditas bernilai tinggi seperti cengkih, pala, dan lada. Jaringan perdagangan menghubungkan pelabuhan-pelabuhan lokal dengan India, Tiongkok, Timur Tengah, hingga Eropa. Perdagangan ini membawa pertukaran barang, pengetahuan, bahasa, agama, dan kebudayaan, sekaligus memunculkan persaingan untuk menguasai jalur niaga.",

"Ternate dan Tidore di jalur rempah":"Kesultanan Ternate dan Tidore tumbuh di kawasan Maluku yang terkenal sebagai penghasil cengkih. Keduanya memiliki jaringan perdagangan dan hubungan diplomatik yang luas. Kedatangan bangsa-bangsa Eropa pada abad ke-16 membuat persaingan politik dan perdagangan di kawasan ini semakin kompleks. Sejarah kedua kesultanan memperlihatkan pentingnya masyarakat lokal dalam perdagangan dunia.",

"Naskah kuno, jendela masa lalu":"Prasasti, naskah daun lontar, kitab, dan catatan perjalanan merupakan sumber untuk mempelajari masa lalu. Isinya dapat memberi petunjuk tentang bahasa, sistem pemerintahan, kepercayaan, hukum, perdagangan, dan kehidupan sehari-hari. Sejarawan membandingkan berbagai sumber karena setiap catatan memiliki sudut pandang dan keterbatasan."
};

const modal=document.getElementById('modal');
document.querySelectorAll('.article').forEach(card=>card.addEventListener('click',()=>{
 const title=card.dataset.title;
 document.getElementById('modalTitle').textContent=title;
 document.getElementById('modalMeta').textContent=card.querySelector('.meta').textContent;
 document.getElementById('modalText').textContent=details[title]||card.querySelector('p').textContent;
 modal.classList.add('show');
}));

document.getElementById('close').onclick=()=>modal.classList.remove('show');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
let category='Semua';
function filterCards(){const q=document.getElementById('search').value.toLowerCase();let shown=0;
 document.querySelectorAll('.article').forEach(card=>{const matchCat=category==='Semua'||card.dataset.cat===category;const matchText=(card.dataset.title+' '+card.innerText).toLowerCase().includes(q);const visible=matchCat&&matchText;card.style.display=visible?'block':'none';if(visible)shown++});
 document.getElementById('empty').style.display=shown?'none':'block';
}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');btn.classList.add('active');category=btn.dataset.cat;filterCards()}));
document.getElementById('search').addEventListener('input',filterCards);
