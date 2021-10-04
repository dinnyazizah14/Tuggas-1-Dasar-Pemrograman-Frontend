const PHI = 22/7;

const luasPersegi = (sisi) => sisi ** 2;

const kelilingPersegi = (sisi) => 4 * sisi;

const luaspersegipanjang = (panjang, lebar) => panjang * lebar;

const kelilingpersegipanjang = (panjang, lebar) => 2 * (panjang + lebar);

const luaslingkaran = (radius) => PHI * radius ** 2;

const kelilinglingkaran = (radius) => 2 * PHI * radius;

const luasSegitiga = (alas,tinggi) => alas * tinggi / 2

const kelilingSegitiga = (alas) => alas * 3

const luasTrapesium = (a,b,tinggi) => (a+b)*tinggi/2

const kelilingTrapesium = (a,b,c,d) => a+b+c+d

const luasJajarGenjang = (alas,tinggi) => alas * tinggi

const kelilingJajarGenjang = (alas, miring) => (alas+miring) * 2

const luasBelahKetupat = (d1,d2) => (d1*d2)/2

const kelilingBelahKetupat = (s) => 4 * s

const luasLayang2 = (di1,di2) => di1 * di2 / 2

const kelilingLayang2 = (a,c) => 2 * (a+c)