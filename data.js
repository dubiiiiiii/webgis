// grouping layes Kampus
const kampus = L.layerGroup();
// input data kampus disini
const kmps1 = L.marker([-7.781774, 110.406953], { icon: ikonKampus1 }).bindPopup("Kampus 1 Universitas Respati Yogyakarta").addTo(kampus);
const kmps2 = L.marker([-7.746490107007653, 110.433677862683], { icon: ikonKampus1 }).bindPopup("Kampus 2 Universitas Respati Yogyakarta").addTo(kampus);

// input data kampus laen.univ lain.
const kamps1 = L.marker([-7.77373218449292, 110.38624998312379], { icon: ikonKampus2 }).bindPopup("UNY").addTo(kampus);
const kamps2 = L.marker([-7.771370267553385, 110.37749892072537], { icon: ikonKampus2 }).bindPopup("UGM").addTo(kampus);
const kamps3 = L.marker([-7.747500413446729, 110.35541929345669], { icon: ikonKampus2 }).bindPopup("UTY").addTo(kampus);
const kamps5 = L.marker([-7.775020073648202, 110.39299014097304], { icon: ikonKampus2 }).bindPopup("kampus 1 - sanata Dharma").addTo(kampus);
const kamps6 = L.marker([-7.784773931800545, 110.39435647844965], { icon: ikonKampus2 }).bindPopup("UIN").addTo(kampus);
const kamps7 = L.marker([-7.780426486847154, 110.414107710866], { icon: ikonKampus2 }).bindPopup("atma jaya").addTo(kampus);
const kamps8 = L.marker([-7.781436026801901, 110.40676633693666], { icon: ikonKampus2 }).bindPopup("stikom akindo").addTo(kampus);
const kamps9 = L.marker([-7.798757915265098, 110.38309121341372], { icon: ikonKampus2 }).bindPopup("ahmad dahlan - kampus 1").addTo(kampus);

// grouping layer public
const public = L.layerGroup();

// input data baru(bandara)
const bandara1 = L.marker([-7.7876838, 110.4317613], { icon: ikonBandara }).bindPopup("Bandara Adisucipto").addTo(public);
const bandara2 = L.marker([-7.8969957, 110.0581783], { icon: ikonBandara }).bindPopup("Bandara NYIA").addTo(public);

// data pointing bank rada eror. masih mau dibenerin.
// input data bank
const bank1 = L.marker([-7.783803536787531, 110.36051036584985], { icon: ikonBank }).bindPopup("Bank BPD DIY").addTo(public);
const bank2 = L.marker([-7.781863075220652, 110.37241157148027], { icon: ikonBank }).bindPopup("Bank BNI").addTo(public);
const bank3 = L.marker([-7.79794801932299, 110.36521444983411], { icon: ikonBank }).bindPopup("Bank BRI Jogja").addTo(public);
const bank4 = L.marker([-7.80110074658923, 110.36581102237187], { icon: ikonBank }).bindPopup("Bank Indonesia Jogjakarta").addTo(public);
const bank5 = L.marker([-7.806772138930389, 110.35013712452982], { icon: ikonBank }).bindPopup("Bank Jogja").addTo(public);
const bank6 = L.marker([-7.8146352592851835, 110.35483152372905], { icon: ikonBank }).bindPopup("Bank Pasar Gedung Kiwo").addTo(public);
const bank7 = L.marker([-7.800638488100226, 110.38323211205439], { icon: ikonBank }).bindPopup("Bank Bpd Diy").addTo(public);
const bank8 = L.marker([-7.800102791774656, 110.3915048131303], { icon: ikonBank }).bindPopup("Bank BNI").addTo(public);
const bank9 = L.marker([-7.800317070387219, 110.39147777815944], { icon: ikonBank }).bindPopup("Bank Jogja").addTo(public);
const bank10 = L.marker([-7.78210909595706, 110.36639296693848], { icon: ikonBank }).bindPopup("Bank J Trust Bank Kc Jogjakarta").addTo(public);

// input data perpustakaan.
const perpus1 = L.marker([-7.78398976163076, 110.37448251506368], { icon: ikonPerpus }).bindPopup("Perpustakaan Kota Jogja").addTo(public);
const perpus2 = L.marker([-7.788876107641377, 110.37041974895317], { icon: ikonPerpus }).bindPopup("Perpustakaan Kolsani").addTo(public);
const perpus3 = L.marker([-7.7907353352512185, 110.36593833811459], { icon: ikonPerpus }).bindPopup("Jogja Library Center").addTo(public);
const perpus4 = L.marker([-7.7759040422942265, 110.38708656917952], { icon: ikonPerpus }).bindPopup("Perpustakaan Negri Yogyakarta").addTo(public);
const perpus5 = L.marker([-7.773121254318819, 110.38636252253852], { icon: ikonPerpus }).bindPopup("Perpustakaan FE UNY").addTo(public);
const perpus6 = L.marker([-7.783706535370159, 110.39559000439368], { icon: ikonPerpus }).bindPopup("Perpustakaan UIN Sunan Kalijaga").addTo(public);
const perpus7 = L.marker([-7.797952704596133, 110.3829752550074], { icon: ikonPerpus }).bindPopup("Perpustakaan FIP UNY Kampus II").addTo(public);
const perpus8 = L.marker([-7.806879431327778, 110.40254659986982], { icon: ikonPerpus }).bindPopup("Perpustakaan Desa Banguntapan").addTo(public);
const perpus9 = L.marker([-7.799280342179557, 110.40708374362998], { icon: ikonPerpus }).bindPopup("GrahaTama Pustaka").addTo(public);

// input data stadium
const stadion1 = L.marker([-7.7505102003777, 110.41817530453923], { icon: ikonStadion }).bindPopup("Stadion MaguwoHarjo").addTo(public);
const stadion2 = L.marker([-7.7879486495123205, 110.37361320263717], { icon: ikonStadion }).bindPopup("Stadion Kridosono").addTo(public);
const stadion3 = L.marker([-7.79596727298891, 110.38430487505329], { icon: ikonStadion }).bindPopup("Stadion Mandala Krida").addTo(public);
const stadion4 = L.marker([-7.776586357331679, 110.38548631776811], { icon: ikonStadion }).bindPopup("Stadion UNY").addTo(public);
const stadion5 = L.marker([-7.875266014919182, 110.38029376300307], { icon: ikonStadion }).bindPopup("Stadion Sultan Agung").addTo(public);
const stadion6 = L.marker([-7.880697905365807, 110.33178186243933], { icon: ikonStadion }).bindPopup("Stadion Dwi Windu").addTo(public);

// input data pom
const pom1 = L.marker([-7.7821264369032255, 110.37213863307852], { icon: ikonPom }).bindPopup("SPBU Pertamina Terban").addTo(public);
const pom2 = L.marker([-7.785579613395807, 110.38789150859924], { icon: ikonPom }).bindPopup("SPBU Pertamina Munggur").addTo(public);
const pom3 = L.marker([-7.783480989758981, 110.40659712311039], { icon: ikonPom }).bindPopup("SPBU Pertamina 44.552.10").addTo(public);
const pom4 = L.marker([-7.8018201, 110.3334457], { icon: ikonPom }).bindPopup("SPBU 44.551.09 Semaki").addTo(public);
const pom5 = L.marker([-7.7981705, 110.4072593], { icon: ikonPom }).bindPopup("SPBU Pertamina 44.552.03").addTo(public);
const pom6 = L.marker([-7.802713, 110.2115249], { icon: ikonPom }).bindPopup("SPBU 44.552.07 Ambarketawang").addTo(public);
const pom7 = L.marker([-7.8123326, 110.2960346], { icon: ikonPom }).bindPopup("SPBU 44.551.04 Bugisan").addTo(public);
const pom8 = L.marker([-7.8194754, 110.3313968], { icon: ikonPom }).bindPopup("SPBU 44.551.05 Gambiran").addTo(public);
const pom9 = L.marker([-7.8194754, 110.3313968], { icon: ikonPom }).bindPopup("SPBU 44.551.02 Ketandan").addTo(public);
const pom10 = L.marker([-7.8084635, 110.3559444], { icon: ikonPom }).bindPopup("SPBU Pertamina Sentul 44.551.15").addTo(public);

// input data HOTEL
const htl1 = L.marker([-7.7815099466418225, 110.40873357998937], { icon: ikonHotel }).bindPopup("Eastparc hotel jogjakarta").addTo(public);
const htl2 = L.marker([-7.773788480277056, 110.36833682859991], { icon: ikonHotel }).bindPopup("hotel tentrem Yogyakarta").addTo(public);
const htl3 = L.marker([-7.815269606141732, 110.36558489071204], { icon: ikonHotel }).bindPopup("the allana malioboro ").addTo(public);
const htl4 = L.marker([-7.798140327212092, 110.330622967608], { icon: ikonHotel }).bindPopup("the amartya jogjakarta hotel").addTo(public);
const htl5 = L.marker([-7.795439731010995, 110.35349684614057], { icon: ikonHotel }).bindPopup("forriz hotel yogyakarta").addTo(public);
const htl6 = L.marker([-7.782420154954959, 110.36974298643813], { icon: ikonHotel }).bindPopup("hotel santika premiere jogja").addTo(public);
const htl7 = L.marker([-7.759475726846422, 110.38733344999197], { icon: ikonHotel }).bindPopup("lafayette boutique hotel jogjakarta").addTo(public);
const htl8 = L.marker([-7.739326274377912, 110.37719537096723], { icon: ikonHotel }).bindPopup("the allana yogyakarta hotel").addTo(public);

// input data kantor_polici
const kanPol1 = L.marker([-7.783481335122462, 110.4058255590672], { icon: ikonKanPol }).bindPopup("Polsek Depok Barat").addTo(public);
const kanPol2 = L.marker([-7.7916470814787475, 110.38661222358782], { icon: ikonKanPol }).bindPopup("Polsek Gondokusuman").addTo(public);
const kanPol3 = L.marker([-7.788371965513397, 110.37804040973619], { icon: ikonKanPol }).bindPopup("Polsek Danurajen").addTo(public);
const kanPol4 = L.marker([-7.797831735840101, 110.3765768554036], { icon: ikonKanPol }).bindPopup("polsek pakualaman").addTo(public);
const kanPol5 = L.marker([-7.803816172627326, 110.37011139046871], { icon: ikonKanPol }).bindPopup("polsek gondomanan").addTo(public);
const kanPol6 = L.marker([-7.797612492713144, 110.35995584092939], { icon: ikonKanPol }).bindPopup("polsek ngampilan").addTo(public);
const kanPol7 = L.marker([-7.78946745802536, 110.36124397188168], { icon: ikonKanPol }).bindPopup("polsek gedongtengn").addTo(public);
const kanPol8 = L.marker([-7.77219931094855, 110.36150780280849], { icon: ikonKanPol }).bindPopup("polsek tegalrejo").addTo(public);
const kanPol9 = L.marker([-7.811242497512933, 110.40767197158544], { icon: ikonKanPol }).bindPopup("polsek banguntapan").addTo(public);
const kanPo20 = L.marker([-7.762175940468889, 110.41537804777782], { icon: ikonKanPol }).bindPopup("polsek depok timur").addTo(public);

// input data rumah_sakit
const rS1 = L.marker([-7.783416208696085, 110.3908779939788], { icon: ikonRs }).bindPopup("siloam hospital yogyakarta").addTo(public);
const rS2 = L.marker([-7.7839819481866845, 110.37769010479447], { icon: ikonRs }).bindPopup("rumah sakit bethesda yogyakarta").addTo(public);
const rS3 = L.marker([-7.796497231400227, 110.3730834106137], { icon: ikonRs }).bindPopup("rumah sakit bethesda lempuyangwangi").addTo(public);
const rS4 = L.marker([-7.797642756376487, 110.41033078804449], { icon: ikonRs }).bindPopup("RSPAU hardjolukito").addTo(public);
const rS5 = L.marker([-7.777196391122687, 110.37615028800582], { icon: ikonRs }).bindPopup("rumah sakit panti rapih").addTo(public);
const rS6 = L.marker([-7.768604969680465, 110.37347277029762], { icon: ikonRs }).bindPopup("rumah sakit umum sardjito").addTo(public);
const rS7 = L.marker([-7.757860578859578, 110.40349918183186], { icon: ikonRs }).bindPopup(" rumah sakit JIH").addTo(public);

// input data F&B
// input data macdonal
const macd = L.layerGroup();
const macd1 = L.marker([-7.7880281, 110.38163], { icon: ikonMac }).bindPopup("McDonald's Ambarukmo").addTo(macd);
const macd2 = L.marker([-7.7880281, 110.38163], { icon: ikonMac }).bindPopup("Mc Donald's Ambarrukmo Plaza").addTo(macd);
const macd3 = L.marker([-7.7832861, 110.3699874], { icon: ikonMac }).bindPopup("McDonald's Sudirman").addTo(macd);
const macd4 = L.marker([-7.7924467, 110.3650781], { icon: ikonMac }).bindPopup("McDonald's Malioboro Mall").addTo(macd);
const macd5 = L.marker([-7.8028422, 110.3682349], { icon: ikonMac }).bindPopup("McDonald's Sultan Agung").addTo(macd);
const macd6 = L.marker([-7.765626, 110.3725358], { icon: ikonMac }).bindPopup("McDonald's Jakal").addTo(macd);
const macd7 = L.marker([-7.7935902, 110.3589864], { icon: ikonMac }).bindPopup("McDonald's Ice Cream Kiosk Malioboro Mall").addTo(macd);
const macd8 = L.marker([-7.7829448, 110.3778242], { icon: ikonMac }).bindPopup("McDonald's Ice Cream Galeria Mall").addTo(macd);
// pitzahut
const macd9 = L.marker([-7.782654971806865, 110.3736432294442], { icon: ikonPza }).bindPopup("Pizza Hut Restoran").addTo(macd);
const macd10 = L.marker([-7.7932708285943555, 110.36637375069897], { icon: ikonPza }).bindPopup("Pizza Hut Restoran - Malioboro Mall Yogyakarta").addTo(macd);
const macd11 = L.marker([-7.821168717684502, 110.36805283306131], { icon: ikonPza }).bindPopup("Pizza Hut Delivery - PHD Indonesia").addTo(macd);
const macd12 = L.marker([-7.807841406750042, 110.37738458252416], { icon: ikonPza }).bindPopup("Pizza Hut Delivery - PHD Indonesia").addTo(macd);
const macd13 = L.marker([-7.802103967896802, 110.37972309623875], { icon: ikonPza }).bindPopup("Pizza Hut Restoran").addTo(macd);
const macd14 = L.marker([-7.7817265683028385, 110.3520160657481], { icon: ikonPza }).bindPopup("Pizza Hut Delivery - PHD Indonesia").addTo(macd);
const macd15 = L.marker([-7.779344063506926, 110.36718658424095], { icon: ikonPza }).bindPopup("Papa Ron's Pizza Jogjakarta").addTo(macd);
const macd16 = L.marker([-7.7778017008879266, 110.38589968984766], { icon: ikonPza }).bindPopup("Pizza Hut Delivery - PHD Indonesia").addTo(macd);
const macd17 = L.marker([-7.753401699489826, 110.36118424750606], { icon: ikonPza }).bindPopup("Pizza Hut Restoran - Jogja City Mall").addTo(macd);
// kebab
const macd18 = L.marker([-7.786416585150843, 110.39334924686226], { icon: ikonKbb }).bindPopup("MORGANS KEBAB UIN").addTo(macd);
const macd19 = L.marker([-7.788870497354464, 110.39832985629697], { icon: ikonKbb }).bindPopup("Kebab Turki Baba Rafi").addTo(macd);
const macd20 = L.marker([-7.773886004730831, 110.40902157788759], { icon: ikonKbb }).bindPopup("DONKING KEBAB & BURGER").addTo(macd);
const macd21 = L.marker([-7.770201556789639, 110.4098539194594], { icon: ikonKbb }).bindPopup("Morgans Kebab Seturan").addTo(macd);
const macd22 = L.marker([-7.769109124699321, 110.40524230931695], { icon: ikonKbb }).bindPopup("Kebab Bang Aji").addTo(macd);
const macd23 = L.marker([-7.767443654299807, 110.40229395454715], { icon: ikonKbb }).bindPopup("Black Kebab Wahid Hasyim").addTo(macd);
const macd24 = L.marker([-7.765559174704011, 110.41079990698988], { icon: ikonKbb }).bindPopup("KEBAB HOUSE, seturan").addTo(macd);
const macd25 = L.marker([-7.760217846452182, 110.41243856764375], { icon: ikonKbb }).bindPopup("Kebab Jussie").addTo(macd);
const macd26 = L.marker([-7.769898565186288, 110.42399992073497], { icon: ikonKbb }).bindPopup("Heybab Kebab").addTo(macd);
const macd27 = L.marker([-7.745215131918962, 110.3891442521703], { icon: ikonKbb }).bindPopup("KEBAB HOUSE, Kaliurang KM 7").addTo(macd);
const macd28 = L.marker([-7.761079257994884, 110.37222342591802], { icon: ikonKbb }).bindPopup("Kebab Al-Qona'ah").addTo(macd);
const macd29 = L.marker([-7.801579327428927, 110.36087380286553], { icon: ikonKbb }).bindPopup("Kebab Turki & Burger KEBABPEDIA, Kauman Jogja").addTo(macd);
const macd30 = L.marker([-7.812410790463266, 110.33808626365766], { icon: ikonKbb }).bindPopup("Kebab Kebabboet 2").addTo(macd);
const macd31 = L.marker([-7.824918593997228, 110.37968651061233], { icon: ikonKbb }).bindPopup("kebab jawa sorogenen").addTo(macd);

// seafood
const sfd1 = L.marker([-7.7827312465932605, 110.37638737583111], { icon: ikonSfd }).bindPopup("Seafood Pak Jenggot").addTo(macd);
const sfd2 = L.marker([-7.782786110663238, 110.38538219785514], { icon: ikonSfd }).bindPopup("Retco Mbali Seafoodv").addTo(macd);
const sfd3 = L.marker([-7.7894532901683, 110.37017022447642], { icon: ikonSfd }).bindPopup("Zona Seafood Kotabaru").addTo(macd);
const sfd4 = L.marker([-7.788811338350605, 110.3664215937512], { icon: ikonSfd }).bindPopup("Seafood Jogja SAE").addTo(macd);
const sfd5 = L.marker([-7.7879564507656855, 110.36660215959334], { icon: ikonSfd }).bindPopup("Seafood Suka Rasa 99").addTo(macd);
const sfd6 = L.marker([-7.787787541121141, 110.36025068594043], { icon: ikonSfd }).bindPopup("Warung Seafood Jala Nelayan (Alamat Baru)").addTo(macd);
const sfd7 = L.marker([-7.8048000591007956, 110.36299480805464], { icon: ikonSfd }).bindPopup("Rumah Makan Sea Food 99").addTo(macd);
const sfd8 = L.marker([-7.812292284822847, 110.38697873355879], { icon: ikonSfd }).bindPopup("Rumah Makan Seafood '99' 2").addTo(macd);
const sfd9 = L.marker([-7.783603446567482, 110.40807567748244], { icon: ikonSfd }).bindPopup("Kurnia Seafood").addTo(macd);
const sfd10 = L.marker([-7.772786327681747, 110.41067469132804], { icon: ikonSfd }).bindPopup("HAWKER'S SEAFOOD").addTo(macd);
const sfd11 = L.marker([-7.765245167729912, 110.41152875614226], { icon: ikonSfd }).bindPopup("Rumah Makan & Seafood 99").addTo(macd);
const sfd12 = L.marker([-7.761224400252279, 110.4068807796099], { icon: ikonSfd }).bindPopup("Seafood chinesefood 2putra").addTo(macd);
const sfd13 = L.marker([-7.765108370881168, 110.39234841368808], { icon: ikonSfd }).bindPopup("Zona Seafood (Gejayan)").addTo(macd);
const sfd14 = L.marker([-7.756884528730812, 110.39484667158685], { icon: ikonSfd }).bindPopup("RM & Seafood 99").addTo(macd);
const sfd15 = L.marker([-7.7662222507361, 110.38068063447501], { icon: ikonSfd }).bindPopup("Seafood Express").addTo(macd);

// juss
const juss1 = L.marker([-7.754894738765809, 110.37655332719082], { icon: ikonJuss }).bindPopup("Journey Juss 37").addTo(macd);
const juss2 = L.marker([-7.756221229453899, 110.3558244581538], { icon: ikonJuss }).bindPopup("Kedai es buah dan jus azka").addTo(macd);
const juss3 = L.marker([-7.767620946243291, 110.38964431167919], { icon: ikonJuss }).bindPopup("Jus Flamboyan").addTo(macd);
const juss4 = L.marker([-7.7565032077697875, 110.40771298455557], { icon: ikonJuss }).bindPopup("Jus Bunda Lapangan SD Perumnas Condongcatur").addTo(macd);
const juss5 = L.marker([-7.777018015745899, 110.39315027891648], { icon: ikonJuss }).bindPopup("cherly juss").addTo(macd);
const juss6 = L.marker([-7.777919044154995, 110.40857507459344], { icon: ikonJuss }).bindPopup("Mas Juice Aneka Jus Dan Es Buah").addTo(macd);
const juss7 = L.marker([-7.778663572762384, 110.36832331595362], { icon: ikonJuss }).bindPopup("Hola Jus Jetis").addTo(macd);
const juss8 = L.marker([-7.781410896322218, 110.36567602264115], { icon: ikonJuss }).bindPopup("Juprek (Jus & Ayam Geprek)").addTo(macd);
const juss9 = L.marker([-7.789293612116783, 110.34806815419974], { icon: ikonJuss }).bindPopup("uragan Juss - Soragan").addTo(macd);
const juss10 = L.marker([-7.804252731417254, 110.34868460888369], { icon: ikonJuss }).bindPopup("Jus dan Es buah 25").addTo(macd);

// boba
const boba1 = L.marker([-7.781994530795312, 110.40081648104311], { icon: ikonBoba }).bindPopup("MiMiK boba").addTo(macd);
const boba2 = L.marker([-7.7818632414829265, 110.39581082137153], { icon: ikonBoba }).bindPopup("Halu Boba Drink").addTo(macd);
const boba3 = L.marker([-7.787675900952815, 110.39106608995175], { icon: ikonBoba }).bindPopup("Milk's Boba Yogyakarta").addTo(macd);
const boba4 = L.marker([-7.782756973768525, 110.38711633062904], { icon: ikonBoba }).bindPopup("4tune boba").addTo(macd);
const boba5 = L.marker([-7.778544000953206, 110.38869334943493], { icon: ikonBoba }).bindPopup("Queen Boba Indonesia").addTo(macd);
const boba6 = L.marker([-7.779298044103133, 110.38390622719683], { icon: ikonBoba }).bindPopup("BOBA RUN & RUN SAMIRONO cabang Maguwoharjo").addTo(macd);
const boba7 = L.marker([-7.804989646232166, 110.40063241467914], { icon: ikonBoba }).bindPopup("Super boba rejowinangun").addTo(macd);
const boba8 = L.marker([-7.8151292, 110.376014], { icon: ikonBoba }).bindPopup("BOBA Junior").addTo(macd);
const boba9 = L.marker([-7.801557257397492, 110.37939640630849], { icon: ikonBoba }).bindPopup("Me Boba Drink").addTo(macd);
const boba10 = L.marker([-7.797306895708147, 110.37705420321818], { icon: ikonBoba }).bindPopup("Xi Huan Boba dan Jajanan").addTo(macd);

// cofee shoop
const cof1 = L.marker([-7.794498800681497, 110.40054078224338], { icon: ikonCofee }).bindPopup("Bento Kopi Sorowajan").addTo(macd);
const cof2 = L.marker([-7.77855382153547, 110.3997924699539], { icon: ikonCofee }).bindPopup("Bento Kopi Nologaten").addTo(macd);
const cof3 = L.marker([-7.756877777008076, 110.41964490556505], { icon: ikonCofee }).bindPopup("Bento Kopi Maguwoharjo").addTo(macd);
const cof4 = L.marker([-7.758416380553517, 110.41168897872366], { icon: ikonCofee }).bindPopup("BENTO KOPI CONCAT").addTo(macd);
const cof5 = L.marker([-7.764408943705764, 110.38776606172893], { icon: ikonCofee }).bindPopup("Bento Kopi Klebengan").addTo(macd);
const cof6 = L.marker([-7.757861399607629, 110.35914047520936], { icon: ikonCofee }).bindPopup("BENTO KOPI JAMAL").addTo(macd);
const cof7 = L.marker([-7.785333402516452, 110.33400162789304], { icon: ikonCofee }).bindPopup("BENTO KOPI GODEAN").addTo(macd);
const cof8 = L.marker([-7.815551641971274, 110.33129363160842], { icon: ikonCofee }).bindPopup("Bento Kopi UMY").addTo(macd);
const cof9 = L.marker([-7.8292739778777545, 110.38230449337661], { icon: ikonCofee }).bindPopup("Bento Kopi UAD").addTo(macd);
const cof10 = L.marker([-7.854970538591736, 110.35509631362359], { icon: ikonCofee }).bindPopup("Kopi Nuri ISI").addTo(macd);
const cof11 = L.marker([-7.75012224431072, 110.40051805576589], { icon: ikonCofee }).bindPopup("Kopi Nuri Concat").addTo(macd);
const cof12 = L.marker([-7.702129216125051, 110.41451670246269], { icon: ikonCofee }).bindPopup("Bento Kopi Jakal").addTo(macd);
const cof13 = L.marker([-7.678813341417324, 110.40658785401486], { icon: ikonCofee }).bindPopup("Kopi Rolas").addTo(macd);
const cof14 = L.marker([-7.673593272435083, 110.41745714613538], { icon: ikonCofee }).bindPopup("Kopi Story' Kaliurang").addTo(macd);
const cof15 = L.marker([-7.675131192299048, 110.41730658033201], { icon: ikonCofee }).bindPopup("Warung Kopi 'Enyak'").addTo(macd);
const cof16 = L.marker([-7.670890153511445, 110.41940043129831], { icon: ikonCofee }).bindPopup("Kopi Bukan Luwak").addTo(macd);
const cof17 = L.marker([-7.66129182958452, 110.42556402135804], { icon: ikonCofee }).bindPopup("Kopi Sawah").addTo(macd);
const cof18 = L.marker([-7.648964908036386, 110.41093629358805], { icon: ikonCofee }).bindPopup("Warung Kopi Boyong").addTo(macd);
const cof19 = L.marker([-7.602573000645404, 110.44581625408632], { icon: ikonCofee }).bindPopup("Warung Kopi Merapi").addTo(macd);
const cof20 = L.marker([-7.6026068669256315, 110.44595438615394], { icon: ikonCofee }).bindPopup("Kopi Merapi Sumijo").addTo(macd);

// buah
const buah1 = L.marker([-7.777551328731811, 110.38785632622624], { icon: ikonBuah }).bindPopup("Kios Buah Mbak Muji").addTo(macd);
const buah2 = L.marker([-7.777037716000923, 110.38312614037069], { icon: ikonBuah }).bindPopup("Kurnia Buah").addTo(macd);
const buah3 = L.marker([-7.776839438437345, 110.38253404454714], { icon: ikonBuah }).bindPopup("Toko Buah Segar Antok").addTo(macd);
const buah4 = L.marker([-7.789995988102584, 110.37992537554153], { icon: ikonBuah }).bindPopup("UD. Putra Mekar Grosir Buah Buahan").addTo(macd);
const buah5 = L.marker([-7.7736032859522695, 110.40127608794451], { icon: ikonBuah }).bindPopup("Toko Buah Segar (TBS)").addTo(macd);
const buah6 = L.marker([-7.763935722422336, 110.40614609403798], { icon: ikonBuah }).bindPopup("Toko buah online jogja").addTo(macd);
const buah7 = L.marker([-7.804569748366399, 110.4446479016032], { icon: ikonBuah }).bindPopup("Barokah Buah Jaya").addTo(macd);
const buah9 = L.marker([-7.802629807164385, 110.41532845442288], { icon: ikonBuah }).bindPopup("Lahas Buah").addTo(macd);
const buah10 = L.marker([-7.806332580020897, 110.41606429423432], { icon: ikonBuah }).bindPopup("Toko Buah Ulil Pisang").addTo(macd);

// burjo
const burjo1 = L.marker([-7.8091172, 110.3671537], { icon: ikonMarung }).addTo(macd).bindTooltip("Burjo Sundawa");
const burjo2 = L.marker([-7.8025196, 110.4093247], { icon: ikonMarung }).addTo(macd).bindTooltip("Burjo Wonocatur");
const burjo3 = L.marker([-7.7822409, 110.4106008], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Moro Artos</b><br><img width= 200px;height100px; src=''/>");
const burjo4 = L.marker([-7.7786507, 110.4162648], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Sumber Nutrisi</b><br><img width= 200px;height100px; src=''/>");
const burjo5 = L.marker([-7.7784663, 110.4163373], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Kian</b><br><img width= 200px;height100px; src=''/>");
const burjo6 = L.marker([-7.7765756, 110.4165483], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Bruneo</b><br><img width= 200px;height100px; src=''/>");
const burjo7 = L.marker([-7.7803639, 110.4081905], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Jago Kledokan</b><br><img width= 200px;height100px; src=''/>");
const burjo8 = L.marker([-7.775898, 110.4000833], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Mekar Mulya</b><br><img width= 200px;height100px; src=''/>");
const burjo9 = L.marker([-7.7627595, 110.3919373], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Barokah</b><br><img width= 200px;height100px; src=''/>");
const burjo10 = L.marker([-7.7866474, 110.3661723], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Mangkubumi YK</b><br><img width= 200px;height100px; src=''/>");
const burjo11 = L.marker([-7.7937085, 110.3781617], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Murni</b><br><img width= 200px;height100px; src=''/>");
const burjo12 = L.marker([-7.7992386, 110.3520246], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Warmindo Murni</b><br><img width= 200px;height100px; src=''/>");
const burjo13 = L.marker([-7.808057, 110.3606965], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Mang Ajut</b><br><img width= 200px;height100px; src=''/>");
const burjo14 = L.marker([-7.8145128, 110.3670539], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Andeska Jogteng</b><br><img width= 200px;height100px; src=''/>");
const burjo15 = L.marker([-7.8207199, 110.3678169], { icon: ikonMarung }).addTo(macd).bindTooltip("<b>Burjo Kesuma 24</b><br><img width= 200px;height100px; src=''/>");

const wisata = L.layerGroup();
// input data pantai
const pantai1 = L.marker([-8.117686145800075, 110.49943818928489], { icon: ikonPantai }).bindPopup("Pantai Pringjono").addTo(wisata);
const pantai2 = L.marker([-8.118280273564734, 110.50288162427346], { icon: ikonPantai }).bindPopup("Pantai Ngobaran").addTo(wisata);
const pantai3 = L.marker([-8.121025092299975, 110.51425042574012], { icon: ikonPantai }).bindPopup("Pantai Ngerenehan").addTo(wisata);
const pantai4 = L.marker([-8.128105842372989, 110.54893105562115], { icon: ikonPantai }).bindPopup("Pantai Baron").addTo(wisata);
const pantai5 = L.marker([-8.132996442900424, 110.5510111642127], { icon: ikonPantai }).bindPopup("Pantai Baru").addTo(wisata);
const pantai6 = L.marker([-8.136459997872615, 110.56598254735546], { icon: ikonPantai }).bindPopup("Pantai Sepanjang").addTo(wisata);
const pantai7 = L.marker([-8.138185712868829, 110.57753710797839], { icon: ikonPantai }).bindPopup("Pantai Drini").addTo(wisata);
const pantai8 = L.marker([-8.139123365532887, 110.58099157441772], { icon: ikonPantai }).bindPopup("Pantai Watu Bolong").addTo(wisata);
const pantai9 = L.marker([-8.147288204113995, 110.59633260358595], { icon: ikonPantai }).bindPopup("Pantai Sarangan Gunung Kidul").addTo(wisata);
const pantai10 = L.marker([-8.144769458227797, 110.5997684977094], { icon: ikonPantai }).bindPopup("Pantai Krakal").addTo(wisata);
const pantai11 = L.marker([-8.146736655289818, 110.60794035325755], { icon: ikonPantai }).bindPopup("Pantai Sundak").addTo(wisata);
const pantai12 = L.marker([-8.15318972903793, 110.61759800059181], { icon: ikonPantai }).bindPopup("Pantai WatuLawang").addTo(wisata);
const pantai13 = L.marker([-8.154934514335038, 110.62185128260555], { icon: ikonPantai }).bindPopup("Pantai Pok Tunggal").addTo(wisata);
const pantai14 = L.marker([-8.157170486246642, 110.62466167370026], { icon: ikonPantai }).bindPopup("Pantai Daud").addTo(wisata);
const pantai15 = L.marker([-8.013349874547385, 110.2914293783176], { icon: ikonPantai }).bindPopup("Pantai Depok").addTo(wisata);
const pantai16 = L.marker([-8.022728514988247, 110.33028263947784], { icon: ikonPantai }).bindPopup("Pantai Parangtritis").addTo(wisata);
const pantai17 = L.marker([-8.016866327028167, 110.31456378871924], { icon: ikonPantai }).bindPopup("Pantai Cemara Sewu").addTo(wisata);

// input paralayang
const paralayang = L.marker([-8.026810678437826, 110.34590955823096], { icon: ikonPara }).bindPopup("Aerosport hang gliding and paralayang").addTo(wisata);
const paralayang2 = L.marker([-8.026794078869669, 110.34608658402752], { icon: ikonPara }).bindPopup("Tandem Paralayang Paragliding Jogja Spot").addTo(wisata);
const paralayang3 = L.marker([-7.776955656788163, 110.51044535998925], { icon: ikonPara }).bindPopup("Tandem Paralayang Gunung Tugel").addTo(wisata);
const paralayang4 = L.marker([-7.8084057859778335, 110.70778754226728], { icon: ikonPara }).bindPopup("Watu Tetes Bukit Paralayang").addTo(wisata);

// dibawah ini belum.
// input air terjun.
const airTerjun1 = L.marker([-7.860948233761917, 110.28709793282233], { icon: ikonTerjun }).bindPopup("curug pulosari").addTo(wisata);
const airTerjun2 = L.marker([-7.9491211732999, 110.47199637871928], { icon: ikonTerjun }).bindPopup("air Terjun Lepo").addTo(wisata);
const airTerjun3 = L.marker([-7.9431609643350995, 110.48923972748798], { icon: ikonTerjun }).bindPopup("air terjun sri gethuk").addTo(wisata);
const airTerjun4 = L.marker([-7.917773057813136, 110.48938069234917], { icon: ikonTerjun }).bindPopup("air terjun randusari").addTo(wisata);
const airTerjun5 = L.marker([-7.75195497468558, 110.13582048681063], { icon: ikonTerjun }).bindPopup("air terjun grojogan sewu jatimulyo").addTo(wisata);

// input mendaki
// const mDaki = L.marker([], { icon: ikonMendaki }).bindPopup("").addTo(wisata);

// input memancing
const mancing1 = L.marker([-7.768710638143095, 110.41954343145957], { icon: ikonMancing }).bindPopup("pemancingan moro kangen").addTo(wisata);
const mancing2 = L.marker([-7.777479602633364, 110.41932714621348], { icon: ikonMancing }).bindPopup("pemancingan harian pak tholo").addTo(wisata);
const mancing3 = L.marker([-7.791492014247658, 110.34683966431733], { icon: ikonMancing }).bindPopup("pemancingan maga indah").addTo(wisata);
const mancing4 = L.marker([-7.813977370326013, 110.41418730157591], { icon: ikonMancing }).bindPopup("pemancingan gus thonk").addTo(wisata);
const mancing5 = L.marker([-7.816868425738125, 110.41588592819149], { icon: ikonMancing }).bindPopup("-7.816868425738125, 110.41588592819149").addTo(wisata);

// diatas ini belum ya.

// grouping layer spot.
const spot = L.layerGroup();

// input data spot.
// spot foto.
const foto = L.marker([-7.78991007089478, 110.36615987727393], { icon: ikonFoto }).bindPopup("spot foto malioboro").addTo(spot);
const foto2 = L.marker([-7.801384812452338, 110.3647637880006], { icon: ikonFoto }).bindPopup("spot foto nol kilometer jogja").addTo(spot);
const foto3 = L.marker([-7.763392465394528, 110.42042431670104], { icon: ikonFoto }).bindPopup("spot foto upsidedown world").addTo(spot);
const foto4 = L.marker([-7.782912308212503, 110.36707472665685], { icon: ikonFoto }).bindPopup("spot foto tugu jogja").addTo(spot);

// spot hiburan
// const hiburan = L.marker([], { icon: ikonHibrn }).bindPopup("").addTo(spot);

// spot jajan
const jajan1 = L.marker([-7.801203196571469, 110.37319349135677], { icon: ikonMaknn }).bindPopup("gudeg permata bu narti").addTo(spot);
const jajan2 = L.marker([-7.793834921853961, 110.36442373033353], { icon: ikonMaknn }).bindPopup("wedhang ronde lek dhie millenial").addTo(spot);
const jajan3 = L.marker([-7.786035443007815, 110.36677850357212], { icon: ikonMaknn }).bindPopup("angkringan gareng petruk").addTo(spot);
const jajan4 = L.marker([-7.7826939970293525, 110.3619904768773], { icon: ikonMaknn }).bindPopup("gudeg mercon mbak yuni").addTo(spot);
const jajan5 = L.marker([-7.783102471800429, 110.36345954858865], { icon: ikonMaknn }).bindPopup("lupis mbah satinem").addTo(spot);
const jajan6 = L.marker([-7.7822600434469535, 110.36533307160887], { icon: ikonMaknn }).bindPopup("angkringan kopi joss lik man").addTo(spot);
const jajan7 = L.marker([-7.781609618508067, 110.3669377031845], { icon: ikonMaknn }).bindPopup("soto sampah").addTo(spot);
const jajan8 = L.marker([-7.782122517522511, 110.36729108421791], { icon: ikonMaknn }).bindPopup("kampoeng tugu").addTo(spot);
const jajan9 = L.marker([-7.785085626580205, 110.37913907187628], { icon: ikonMaknn }).bindPopup("soerabi bandung kang sena").addTo(spot);
const jajan10 = L.marker([-7.793908876557251, 110.36525059088439], { icon: ikonMaknn }).bindPopup("gudeg yu djum").addTo(spot);
const jajan11 = L.marker([-7.796748767707215, 110.37247783059792], { icon: ikonMaknn }).bindPopup("ayam goreng kampung bu yadi").addTo(spot);
const jajan12 = L.marker([-7.801791832326015, 110.37416292793871], { icon: ikonMaknn }).bindPopup(" yunus fried chicken").addTo(spot);
const jajan13 = L.marker([-7.782742624579443, 110.3659432983986], { icon: ikonMaknn }).bindPopup("bebek goreng simpatik tugu.").addTo(spot);

// spot makanan
// const makanan = L.marker([], { icon: ikonMaknn }).bindPopup("").addTo(spot);

// spot road_marker_event
// const roadSign = L.marker([], { icon: ikonRoads }).bindPopup("").addTo(spot);

// spot shooping
const shooping1 = L.marker([-7.799220782461251, 110.36600047732554], { icon: ikonShoop }).bindPopup("pasar sore malioboro").addTo(spot);
const shooping2 = L.marker([-7.79880144875506, 110.36573711063554], { icon: ikonShoop }).bindPopup("pasar beringharjo").addTo(spot);
const shooping3 = L.marker([-7.801843496823679, 110.37726323321488], { icon: ikonShoop }).bindPopup("pasar sentul yogyakarta").addTo(spot);
const shooping4 = L.marker([-7.819995672654673, 110.36812427644871], { icon: ikonShoop }).bindPopup("pasar prawirotaman").addTo(spot);
const shooping5 = L.marker([-7.792196427863933, 110.37342499177547], { icon: ikonShoop }).bindPopup("pasar lempuyangan").addTo(spot);
const shooping6 = L.marker([-7.805884592881214, 110.35099830859406], { icon: ikonShoop }).bindPopup("sakola jogja").addTo(spot);
const shooping7 = L.marker([-7.804605777424229, 110.35130822481665], { icon: ikonShoop }).bindPopup("jollie jogja wirobrajan").addTo(spot);
const shooping8 = L.marker([-7.79775085907929, 110.36533398061545], { icon: ikonShoop }).bindPopup("ramayana mall malioboro").addTo(spot);
const shooping9 = L.marker([-7.797888379869936, 110.36506307751401], { icon: ikonShoop }).bindPopup("djenar batik malioboro").addTo(spot);
const shooping10 = L.marker([-7.797168886542464, 110.36437576161076], { icon: ikonShoop }).bindPopup("ramai mall malioboro").addTo(spot);
const shooping11 = L.marker([-7.782819286904569, 110.37912120567093], { icon: ikonShoop }).bindPopup("galeria mall jogjakarta").addTo(spot);
const shooping12 = L.marker([-7.769565967150546, 110.4019283515925], { icon: ikonShoop }).bindPopup("outlet biru new").addTo(spot);
const shooping13 = L.marker([-7.783720030382403, 110.39063356949795], { icon: ikonShoop }).bindPopup("lippo plaza").addTo(spot);
const shooping14 = L.marker([-7.75971019497309, 110.39897188665365], { icon: ikonShoop }).bindPopup("hartono mall").addTo(spot);

// grouping monument
const monument = L.layerGroup();
// monument tugu jogja
const tuguJogja = L.marker([-7.782912308212503, 110.36707472665685], { icon: ikonTugu }).bindPopup("Tugu Jogja").addTo(monument);

// monument lainnya biasa.
const monumn1 = L.marker([-7.749568438900221, 110.36960109679524], { icon: ikonMonument }).bindPopup("monumen jogja kembali").addTo(monument);
const monumn2 = L.marker([-7.801004512331978, 110.36533542560012], { icon: ikonMonument }).bindPopup("monumen serang umum 1 maret 1949").addTo(monument);
const monumn3 = L.marker([-7.800287359883147, 110.36634771102693], { icon: ikonMonument }).bindPopup("monumen jendral sudirman").addTo(monument);
const monumn4 = L.marker([-7.801103735008461, 110.36461543594386], { icon: ikonMonument }).bindPopup("monumen batik yogyakarta").addTo(monument);
const monumn5 = L.marker([-7.800320269892269, 110.36633931106942], { icon: ikonMonument }).bindPopup("monumen urip sumoharjo").addTo(monument);
const monumn6 = L.marker([-7.789409472742957, 110.36608547210795], { icon: ikonMonument }).bindPopup("monumen stasiun KA jogjakarta").addTo(monument);
const monumn7 = L.marker([-7.754922631699836, 110.38795546139028], { icon: ikonMonument }).bindPopup("monumen pahlawan pancasila kentungan").addTo(monument);
const monumn8 = L.marker([-7.840822345187293, 110.37647114662542], { icon: ikonMonument }).bindPopup("monumen perjuangan TNI AU").addTo(monument);
const monumn9 = L.marker([-7.788160696719536, 110.3715363759896], { icon: ikonMonument }).bindPopup("monumen sanapati").addTo(monument);

/* seting base layer+sub layer dlm map. */
// seting base layes/tile layer
const baseLayers = {
  Openstreet: osm,
  Satelite: satelite,
};

// seting overlay/sub baselayer.
const overlays = {
  Universitas: kampus,
  "Fasilitas Public": public,
  "Tempat Wisata": wisata,
  "F & B": macd,
  "Spot Menarik": spot,
  Monumen: monument,
};

// seting.
const layerControl = L.control.layers(baseLayers, overlays).addTo(map);
