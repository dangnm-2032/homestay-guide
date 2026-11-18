/* Edit the content arrays below (RULES, ROOM, FOOD, CAFES, BARS, SIGHTS, TRIPS, TRANSPORT, TIPS, PHRASES, CLINICS).
   Each text has a Vietnamese and an English version. */
const IC = {
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  id:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h4M14 14h3"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3 3 0 0 1 0 6M18 14.5c1.8.9 3 2.9 3 5.5"/>',
  moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  smoke:'<rect x="2" y="13" width="14" height="4" rx="1"/><path d="M19 13v4M22 13v4M3 3l18 18"/>',
  ban:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  power:'<path d="M12 3v8"/><path d="M6.3 7.3a8 8 0 1 0 11.4 0"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  alert:'<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17.5v.01"/>'
};
const svg = k => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const t = (vi, en) => `<span class="vi">${esc(vi)}</span><span class="en">${esc(en ?? vi)}</span>`;
const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + ', Ho Chi Minh City');
const mapLink = q => `<a class="map" href="${mapUrl(q)}" target="_blank" rel="noopener">${t('Bản đồ','Map')}</a>`;

const RULES = [
  ['clock', 0, 'Nhận & trả phòng','Check-in & check-out',
    ['Nhận phòng từ 15:00, trả trước 12:00','Nhận sớm / trả muộn: báo trước','Gửi hành lý miễn phí'],
    ['Check-in from 3 PM, out by 12 PM','Early or late: ask ahead','Free luggage storage']],
  ['id', 0, 'Giấy tờ lưu trú','ID & registration',
    ['Xuất trình CCCD / hộ chiếu khi nhận phòng','Khai báo lưu trú theo quy định','Số người ở đúng như đã đặt'],
    ['Show your passport or ID at check-in','Guests are registered with local police by law','Guest count must match the booking']],
  ['users', 0, 'Khách thăm & thú cưng','Visitors & pets',
    ['Khách thăm chỉ ở khu chung, 8:00–22:00','Không ngủ lại qua đêm khi chưa đăng ký','Thú cưng: báo trước'],
    ['Visitors in common areas only, 8 AM–10 PM','No unregistered overnight guests','Pets: ask first']],
  ['moon', 0, 'Giờ yên lặng','Quiet hours',
    ['22:00 – 5:00: nói nhỏ, vặn nhỏ loa, TV','Không tiệc tùng, karaoke'],
    ['10 PM – 5 AM: keep voices and music low','No parties or karaoke']],
  ['smoke', 1, 'Không hút thuốc','No smoking',
    ['Kể cả thuốc lá điện tử, shisha trong nhà','Khu hút thuốc: ở ngoài','Vi phạm: phí khử mùi 200.000đ'],
    ['Includes vaping and shisha indoors','Smoking area: outside','Cleaning fee if breached: 200.000đ']],
  ['ban', 1, 'Nghiêm cấm','Strictly prohibited',
    ['Ma túy, vũ khí, chất cháy nổ','Cờ bạc, mại dâm, hoạt động trái luật','Sầu riêng, mắm tôm trong phòng'],
    ['Drugs, weapons, flammable items','Gambling, prostitution, illegal activity','Durian or strong-smelling food in rooms']],
  ['power', 0, 'Phòng & thiết bị','Room & appliances',
    ['Tắt máy lạnh, đèn, TV khi ra ngoài','Đóng cửa sổ khi bật máy lạnh','Không dời nội thất, dán lên tường'],
    ['AC, lights and TV off when you go out','Close windows while the AC is on','Don’t move furniture or stick things on walls']],
  ['trash', 0, 'Vệ sinh & rác','Cleanliness',
    ['Phân loại rác đúng thùng','Không bỏ giấy, băng vệ sinh vào bồn cầu','Bếp chung: rửa dọn ngay sau khi dùng'],
    ['Sort rubbish into the right bins','Don’t flush paper, pads or wet wipes','Shared kitchen: wash up right after use']],
  ['lock', 0, 'An ninh','Security',
    ['Khóa cửa phòng và cổng khi ra vào','Không đưa mã cửa cho người ngoài','Tự bảo quản tư trang, dùng két sắt'],
    ['Lock your room and the main gate','Never share door codes or keys','Keep valuables safe, use the safe']],
  ['alert', 0, 'Hư hỏng & bồi thường','Damages',
    ['Bồi thường theo giá thực tế','Mất chìa khóa / thẻ phòng: 200.000đ','Vi phạm nặng: mời rời đi, không hoàn tiền'],
    ['Damage is charged at actual cost','Lost key or room card: 200.000đ','Serious breach: asked to leave, no refund']]
];

const ROOM = [
  ['Máy lạnh','Air-con','Để 25–26°C cho dễ chịu và tiết kiệm.','25–26°C is comfortable and saves power.'],
  ['Máy giặt','Washing machine','Ở tầng 4 của toà nhà · miễn phí. Tự chuẩn bị bột giặt.','Free at 4th floor · bring your own detergent.'],
  ['Cổng & chìa khóa','Gate & keys','Chìa khóa cửa và chìa khóa phòng nằm trong hộp khóa. Khi trả phòng, vui lòng để lại chìa vào hộp và xoay lệch các số để xáo mã.','Your door and room keys are in the lockbox. When you check out, please put the keys back and scramble the code.'],
  ['Dọn phòng','Housekeeping','Homestay không có dịch vụ dọn phòng hằng ngày.','Please note that we don\'t offer daily cleaning.']
];

const FOOD = [
  ['Bánh Mì Huỳnh Hoa','Bánh mì thập cẩm','Loaded bánh mì','26 Lê Thị Riêng','11:00–21:00 · thường xếp hàng','11 AM–9 PM · expect a queue',0],
  ['Phở Minh','Phở bò','Beef phở','63/6 Pasteur','Trong hẻm','In an alley',1],
  ['Bếp Mẹ Ỉn','Cơm nhà, món Việt','Home-style Vietnamese','136/9 Lê Thánh Tôn','10:30–22:30 · gần chợ Bến Thành','10:30 AM–10:30 PM · near Ben Thanh Market',0],
  ['Bánh Xèo 46A','Bánh xèo','Crispy pancake','46A Đinh Công Tráng','Khu Tân Định','Tân Định area',0],
  ['Hồng Phát','Hủ tiếu','Hủ tiếu noodle soup','389–391 Võ Văn Tần','~10 phút Grab','~10 min by Grab',1],
  ['Chay Garden','Món chay','Vegetarian','52 Võ Văn Tần','Hoàn toàn chay','Fully vegetarian',1],
  ['Cơm Tấm Ba Ghiền','Cơm tấm sườn','Grilled pork broken rice','84 Đặng Văn Ngữ, Phú Nhuận','8:00–20:30 · ~15 phút Grab','8 AM–8:30 PM · ~15 min by Grab',1],
  ['Phở Lệ','Phở bò','Beef phở','413–415 Nguyễn Trãi','Khu Chợ Lớn','Chinatown area',1]
];

const CAFES = [
  ['Cộng Cà Phê','Cà phê dừa, không gian retro','Coconut coffee, retro decor','93 Yersin'],
  ['Okkio Coffee','Cà phê specialty, pour-over','Specialty coffee, pour-over','120–122 Lê Lợi'],
  ['Maison Marou','Socola nóng/đá từ hạt cacao Việt','Vietnamese bean-to-bar chocolate','144Bis Lê Thánh Tôn'],
  ['Phê La','Cà phê phin, đồ uống sáng tạo','Phin coffee, creative drinks','01–03 Phan Chu Trinh'],
  ['Ollin Cafe','Hạt Cầu Đất & Ethiopia','Da Lat & Ethiopian beans','180 Nguyễn Văn Thủ'],
  ['Cà Phê Đô Phủ','Quán lịch sử, có cơm tấm','Historic café, serves broken rice','13A Đặng Dung']
];

const BARS = [
  ['Saigon Saigon Rooftop Bar','Cổ điển Đông Dương, nhạc sống','Vintage Indochine, live music','Caravelle Hotel, 19–23 Lam Sơn','Tầng 9','9th floor'],
  ['Rooty Rooftop','Hồ bơi vô cực, acoustic cuối tuần','Infinity pool, weekend acoustic','The Myst Đồng Khởi, 6–8 Hồ Huấn Nghiệp','Tầng 15','15th floor'],
  ['Chill Skybar','Sang trọng, có DJ','Upscale, DJ','AB Tower, 76A Lê Lai','',''],
  ['Banana Mama','View 360°, DJ cuối tuần','360° views, weekend DJs','102 Cống Quỳnh','Tầng 10','10th floor'],
  ['The View Rooftop','Cocktail bình dân, nhìn xuống Bùi Viện','Budget cocktails over Bùi Viện','195 Bùi Viện','Tầng 9','9th floor']
];

const SIGHTS = [
  ['Dinh Độc Lập','Independence Palace','135 Nam Kỳ Khởi Nghĩa','Từ 8:00 · vé 65.000đ (kèm triển lãm 85.000đ)','From 8 AM · 65,000đ (85,000đ with exhibition)'],
  ['Bảo tàng Chứng tích Chiến tranh','War Remnants Museum','28 Võ Văn Tần','Khoảng 7:30–17:30 · vé 40.000đ · dành ~2 giờ','About 7:30 AM–5:30 PM · 40,000đ · allow ~2 h'],
  ['Bưu điện Thành phố','Central Post Office','2 Công xã Paris','7:00–19:00 · miễn phí · gửi bưu thiếp tại đây','7 AM–7 PM · free · send a postcard home'],
  ['Nhà thờ Đức Bà','Notre-Dame Cathedral','1 Công xã Paris','Đang trùng tu; vào trong khi dự lễ (lễ tiếng Anh CN 9:30)','Under restoration; inside for Mass only (English Mass Sun 9:30 AM)'],
  ['Đường sách Nguyễn Văn Bình','Book Street','Nguyễn Văn Bình','Ngay cạnh Bưu điện','Right beside the Post Office'],
  ['Phố đi bộ Nguyễn Huệ','Nguyễn Huệ walking street','Nguyễn Huệ','Đẹp nhất buổi tối','Best in the evening'],
  ['Saigon Skydeck','Saigon Skydeck','Bitexco, 36 Hồ Tùng Mậu','Tầng 49 · 9:30–21:30 · từ ~10 USD','49th floor · 9:30 AM–9:30 PM · from ~US$10']
];

const TRIPS = [
  ['Địa đạo Củ Chi','Cu Chi Tunnels','Nửa ngày · từ ~8 USD · Bến Dược vắng hơn Bến Đình','Half day · from ~US$8 · Ben Duoc is quieter than Ben Dinh'],
  ['Miền Tây (Mỹ Tho – Bến Tre)','Mekong Delta','Cả ngày · từ ~20 USD · tuyến này không có chợ nổi','Full day · from ~US$20 · no floating market on this route'],
  ['Food tour xe máy','Motorbike food tour','~4 giờ · từ ~45 USD','~4 hours · from ~US$45'],
  ['Rừng ngập mặn Cần Giờ','Can Gio mangroves','Cả ngày · từ ~35 USD · cất kỹ đồ, khỉ hay giật','Full day · from ~US$35 · monkeys grab shiny things']
];

const TRANSPORT = [
  ['Grab 4 chỗ, sân bay → đây','Grab car (4 seats), airport → here','110.000–160.000đ','Đón tại điểm ghi trong app','Meet at the pickup point in the app'],
  ['Grab 7 chỗ, sân bay → đây','Grab car (7 seats), airport → here','180.000–230.000đ','Đã gồm phí sân bay','Airport fee included'],
  ['Taxi Vinasun / Mai Linh','Vinasun / Mai Linh metered taxi','170.000–230.000đ','Chỉ ở hàng taxi chính thức','Official taxi rank only'],
  ['Xe buýt 109','Bus 109','8.000–15.000đ','Nhà ga T3 ↔ bến xe buýt Sài Gòn · 5:30–22:40','Terminal 3 ↔ Saigon bus station · 5:30 AM–10:40 PM'],
  ['Metro số 1','Metro Line 1','6.000–20.000đ · vé ngày 40.000đ','Bến Thành ↔ Suối Tiên · 5:00–22:00','Ben Thanh ↔ Suoi Tien · 5 AM–10 PM']
];

const TIPS = [
  ['Tiền mặt','Cash','Quán nhỏ, chợ, xe ôm chủ yếu nhận tiền mặt. Tờ 20.000đ và 500.000đ cùng tông xanh, dễ nhầm.','Street food, markets and motorbike taxis are mostly cash. The blue 20,000đ and 500,000đ notes look alike.'],
  ['Qua đường','Crossing','Đi chậm và đều, đừng chạy hay lùi lại đột ngột; xe máy sẽ tránh bạn.','Walk slowly and steadily; don’t run or step back. Motorbikes will flow around you.'],
  ['Giật đồ','Bag snatching','Cầm điện thoại phía trong vỉa hè, đeo túi chéo trước người.','Hold your phone away from the road and wear bags across your front.'],
  ['Trả giá','Bargaining','Ở chợ, trả từ khoảng 40–50% giá đầu. Hàng hiệu giá rẻ thường là hàng giả.','At markets, open around 40–50% of the first price. Cheap “brands” are usually fake.'],
  ['Tiền boa','Tipping','Không bắt buộc; làm tròn hoặc 5–10% nếu hài lòng.','Not expected; round up or leave 5–10% if you’re happy.'],
  ['Nước uống','Water','Không uống nước vòi, dùng nước đóng chai.','Don’t drink tap water; use bottled water.'],
  ['Thời tiết','Weather','Mùa mưa khoảng tháng 5–11, mưa rào chiều rồi tạnh. Mang áo mưa mỏng.','Rainy season is roughly May–Nov with short afternoon showers. Carry a light poncho.'],
  ['Trang phục','Dress code','Che vai và đầu gối khi vào chùa, nhà thờ, Dinh Độc Lập.','Cover shoulders and knees at temples, churches and the Independence Palace.']
];

const PHRASES = [
  ['Xin chào','sin chow','Chào hỏi','Hello'],
  ['Cảm ơn','gahm uhn','Cảm ơn','Thank you'],
  ['Bao nhiêu tiền?','bow nyew tee-en','Hỏi giá','How much?'],
  ['Không cay','khohng kai','Gọi món','Not spicy, please'],
  ['Một cà phê sữa đá','moht ka-feh soo-uh dah','Gọi cà phê','One iced milk coffee'],
  ['Tính tiền','ting tee-en','Thanh toán','The bill, please']
];

const CLINICS = [
  ['Family Medical Practice','Diamond Plaza, 34 Lê Duẩn','+84 28 3822 7848','8:00–17:00 · đường dây khẩn 24/7','8 AM–5 PM · 24/7 emergency line'],
  ['Centre Médical International (CMI)','30 Phạm Ngọc Thạch','+84 28 3827 2366','Gọi trước','Call ahead'],
  ['FV Hospital','6 Nguyễn Lương Bằng','+84 28 3511 3500','Cấp cứu 24/7 · ~20 phút Grab','24/7 ER · ~20 min by Grab'],
  ['Vinmec Central Park','208 Nguyễn Hữu Cảnh','+84 28 3622 1166','Cấp cứu 24/7','24/7 ER']
];

const $ = id => document.getElementById(id);
$('rules-list').innerHTML = RULES.map(([ic,no,tv,te,lv,le]) => `
  <div class="rule${no?' no':''}"><div class="ic">${svg(ic)}</div><div class="body">
    <h3>${t(tv,te)}</h3><ul>${lv.map((l,i)=>`<li>${t(l,le[i])}</li>`).join('')}</ul></div></div>`).join('');
$('room-list').innerHTML = ROOM.map(([tv,te,dv,de]) => `<div class="card"><div class="t">${t(tv,te)}</div><div class="d">${t(dv,de)}</div></div>`).join('');
$('food-list').innerHTML = FOOD.map(([n,wv,we,a,mv,me,bib]) => `
  <div class="item"><div class="name">${esc(n)}${bib?'<span class="tag">Bib</span>':''}</div>
  <div class="what">${t(wv,we)}</div><div class="meta">${esc(a)} · ${t(mv,me)}</div><div class="side">${mapLink(n+', '+a)}</div></div>`).join('');
$('cafe-list').innerHTML = CAFES.map(([n,dv,de,a]) => `
  <div class="item"><div class="name">${esc(n)}</div><div class="what">${t(dv,de)}</div><div class="meta">${esc(a)}</div><div class="side">${mapLink(n+', '+a)}</div></div>`).join('');
$('bar-list').innerHTML = BARS.map(([n,dv,de,a,fv,fe]) => `
  <div class="item"><div class="name">${esc(n)}</div><div class="what">${t(dv,de)}</div><div class="meta">${fv?t(fv,fe)+' · ':''}${esc(a)}</div><div class="side">${mapLink(n+', '+a)}</div></div>`).join('');
$('sight-list').innerHTML = SIGHTS.map(([nv,ne,a,mv,me]) => `
  <div class="item"><div class="name">${t(nv,ne)}</div><div class="what">${t(mv,me)}</div><div class="meta">${esc(a)}</div><div class="side">${mapLink(nv+', '+a)}</div></div>`).join('');
$('trip-list').innerHTML = TRIPS.map(([tv,te,dv,de]) => `<div class="card"><div class="t">${t(tv,te)}</div><div class="d">${t(dv,de)}</div></div>`).join('');
$('transport-list').innerHTML = TRANSPORT.map(([ov,oe,p,nv,ne]) => `<tr><td>${t(ov,oe)}</td><td class="num">${esc(p)}</td><td>${t(nv,ne)}</td></tr>`).join('');
$('tip-list').innerHTML = TIPS.map(([kv,ke,dv,de]) => `<li><b>${t(kv,ke)}</b><span>${t(dv,de)}</span></li>`).join('');
$('phrase-list').innerHTML = PHRASES.map(([vn,say,mv,me]) => `<div class="phrase"><div class="vn" lang="vi">${esc(vn)}</div><div class="say">${t(mv,'“'+say+'”')}</div><div class="en">${esc(me)}</div></div>`).join('');
$('clinic-list').innerHTML = CLINICS.map(([n,a,p,mv,me]) => `
  <div class="item"><div class="name">${esc(n)}</div><div class="what">${t(mv,me)}</div><div class="meta">${esc(a)} · <span style="font-variant-numeric:tabular-nums">${esc(p)}</span></div><div class="side">${mapLink(n+', '+a)}</div></div>`).join('');

/* language */
function setLang(l){
  document.documentElement.setAttribute('data-lang', l);
  document.documentElement.lang = l;
  $('lang-vi').setAttribute('aria-pressed', l==='vi');
  $('lang-en').setAttribute('aria-pressed', l==='en');
  try{ localStorage.setItem('guide-lang', l) }catch(e){}
}
let saved = null;
try{ saved = localStorage.getItem('guide-lang') }catch(e){}
setLang(saved === 'en' || saved === 'vi' ? saved : ((navigator.language||'').toLowerCase().startsWith('vi') ? 'vi' : 'en'));
$('lang-vi').addEventListener('click', () => setLang('vi'));
$('lang-en').addEventListener('click', () => setLang('en'));

/* copy wifi */
let toastTimer;
function toast(msg){ const el=$('toast'); el.textContent=msg; el.hidden=false; clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.hidden=true,1800); }
$('copy-wifi').addEventListener('click', () => {
  const text = $('wifi-pass').textContent.trim();
  const vi = document.documentElement.getAttribute('data-lang') !== 'en';
  const done = () => toast(vi ? 'Đã sao chép mật khẩu' : 'Password copied');
  const fallback = () => { const r=document.createRange(); r.selectNodeContents($('wifi-pass')); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast(vi ? 'Đã chọn mật khẩu, hãy sao chép' : 'Password selected, copy it now'); };
  try{ navigator.clipboard.writeText(text).then(done, fallback) }catch(e){ fallback() }
});
