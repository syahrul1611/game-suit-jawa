function pilihanKomputer() {
    const comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp > 0.34 && comp < 0.64 )return 'semut';
    return 'orang';
}

function pemenang(comp, player) {
    if (player==comp) return 'SERI!';

    if (player == 'gajah' ) return ( comp == 'semut' ) ? 'KALAH!' : 'MENANG!';

    if (player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';

    if (player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
}

const pGajah = document.querySelector('.gajah')
const pSemut = document.querySelector('.semut');
const pOrang = document.querySelector('.orang');

pGajah.addEventListener('click', function () {
    const pilihanComp = pilihanKomputer();
    const hasil = pemenang(pilihanComp, pGajah.className);
    const info = document.querySelector('.info');

    const imgKomputer = document.querySelector('.img-komputer');

    imgKomputer.setAttribute('src', 'img/'+pilihanComp+'.png');

    return info.innerHTML = hasil; 
});

pSemut.addEventListener('click', function () {
    const pilihanComp = pilihanKomputer();
    const hasil = pemenang(pilihanComp, pSemut.className);
    const info = document.querySelector('.info');

    const imgKomputer = document.querySelector('.img-komputer');

    imgKomputer.setAttribute('src', 'img/'+pilihanComp+'.png');

    return info.innerHTML = hasil; 
})

pOrang.addEventListener('click', function () {
    const pilihanComp = pilihanKomputer();
    const hasil = pemenang(pilihanComp, pOrang.className);
    const info = document.querySelector('.info');

    const imgKomputer = document.querySelector('.img-komputer');

    imgKomputer.setAttribute('src', 'img/'+pilihanComp+'.png');

    return info.innerHTML = hasil; 
})
