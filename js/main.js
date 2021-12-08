document.addEventListener("DOMContentLoaded", function(event){
    var w = window.innerWidth;
    if(w > 600){
        document.getElementById("binangonan-map").src = "images/binangonan_map.png";
    }
    else{
        document.getElementById("binangonan-map").src = "images/binangonan_map_vertical.png";
    }
    var aboutpage_image_width = $(".raja img").width();
    console.log(aboutpage_image_width);
    $(".raja img").css({'height': aboutpage_image_width.toString() + 'px',});
});

window.addEventListener('resize', function(event){
    var w = window.innerWidth;
    if(w > 600){
        document.getElementById("binangonan-map").src = "images/binangonan_map.png";
    }
    else{
        document.getElementById("binangonan-map").src = "images/binangonan_map_vertical.png";
    }
    var aboutpage_image_width = $(".raja img").width();
    $(".raja img").css({'height': aboutpage_image_width.toString() + 'px',});
});

$("#pagasa-pin").tooltip({
    html: true,
});
$("#pagasa-pin").attr("data-original-title",
                      "<h4>PAG-ASA</h4>\
                      <img src='images/pagasa_tooltip_image.jpg' style='width: 10rem;'>");

$("#sancarlos-pin").tooltip({
    html: true,
});
$("#sancarlos-pin").attr("data-original-title",
                      "<h4>SAN CARLOS</h4>\
                      <img src='images/sancarlos_tooltip_img.jpg' style='width: 10rem;'>");

$("#tagpos-pin").tooltip({
    html: true,
});
$("#tagpos-pin").attr("data-original-title",
                      "<h4>TAGPOS</h4>\
                      <img src='images/tagpos_tooltip_img.jpg' style='width: 10rem;'>");

$("#bilibiran-pin").tooltip({
    html: true,
});
$("#bilibiran-pin").attr("data-original-title",
                      "<h4>BILIBIRAN</h4>\
                      <img src='images/bilibiran_tooltip_img.jpg' style='width: 10rem;'>");

$("#tayuman-pin").tooltip({
    html: true,
});
$("#tayuman-pin").attr("data-original-title",
                      "<h4>TAYUMAN</h4>\
                      <img src='images/tayuman_tooltip_img.jpg' style='width: 10rem;'>");

$("#palangoy-pin").tooltip({
    html: true,
});
$("#palangoy-pin").attr("data-original-title",
                      "<h4>PALANGOY</h4>\
                      <img src='images/palangoy_tooltip_img.jpg' style='width: 10rem;'>");

$("#pantok-pin").tooltip({
    html: true,
});
$("#pantok-pin").attr("data-original-title",
                      "<h4>PANTOK</h4>\
                      <img src='images/pantok_tooltip_img.jpg' style='width: 10rem;'>");

$("#kalawaan-pin").tooltip({
    html: true,
});
$("#kalawaan-pin").attr("data-original-title",
                      "<h4>KALAWAAN (DARANGAN)</h4>\
                      <img src='images/darangan_tooltip_img.jpg' style='width: 10rem;'>");

$("#tatala-pin").tooltip({
    html: true,
});
$("#tatala-pin").attr("data-original-title",
                      "<h4>TATALA</h4>\
                      <img src='images/tatala_tooltip_img.jpg' style='width: 10rem;'>");

$("#calumpang-pin").tooltip({
    html: true,
});
$("#calumpang-pin").attr("data-original-title",
                      "<h4>CALUMPANG</h4>\
                      <img src='images/calumpang_tooltip_img.jpg' style='width: 10rem;'>");

$("#layunan-pin").tooltip({
    html: true,
});
$("#layunan-pin").attr("data-original-title",
                      "<h4>LAYUNAN</h4>\
                      <img src='images/layunan_tooltip_img.jpg' style='width: 10rem;'>");

$("#libis-pin").tooltip({
    html: true,
});
$("#libis-pin").attr("data-original-title",
                      "<h4>LIBIS</h4>\
                      <img src='images/libis_tooltip_img.jpg' style='width: 10rem;'>");

$("#batingan-pin").tooltip({
    html: true,
});
$("#batingan-pin").attr("data-original-title",
                      "<h4>BATINGAN</h4>\
                      <img src='images/batingan_tooltip_img.jpg' style='width: 10rem;'>");

$("#mambog-pin").tooltip({
    html: true,
});
$("#mambog-pin").attr("data-original-title",
                      "<h4>MAMBOG</h4>\
                      <img src='images/mambog_tooltip_img.jpg' style='width: 10rem;'>");

$("#parang-pin").tooltip({
    html: true,
});
$("#parang-pin").attr("data-original-title",
                      "<h4>MAHABANG PARANG</h4>\
                      <img src='images/parang_tooltip_img.jpg' style='width: 10rem;'>");

$("#libid-pin").tooltip({
    html: true,
});
$("#libid-pin").attr("data-original-title",
                      "<h4>LIBID</h4>\
                      <img src='images/libid_tooltip_img.jpg' style='width: 10rem;'>");

$("#lunsad-pin").tooltip({
    html: true,
});
$("#lunsad-pin").attr("data-original-title",
                      "<h4>LUNSAD</h4>\
                      <img src='images/lunsad_tooltip_img.jpg' style='width: 10rem;'>");

$("#pilapila-pin").tooltip({
    html: true,
});
$("#pilapila-pin").attr("data-original-title",
                      "<h4>PILA-PILA</h4>\
                      <img src='images/pilapila_tooltip_img.jpg' style='width: 10rem;'>");

$("#limbon-pin").tooltip({
    html: true,
});
$("#limbon-pin").attr("data-original-title",
                      "<h4>LIMBON-LIMBON</h4>\
                      <img src='images/limbon_tooltip_img.jpg' style='width: 10rem;'>");

$("#ithan-pin").tooltip({
    html: true,
});
$("#ithan-pin").attr("data-original-title",
                      "<h4>ITHAN</h4>\
                      <img src='images/ithan_tooltip_img.jpg' style='width: 10rem;'>");

$("#kalinawan-pin").tooltip({
    html: true,
});
$("#kalinawan-pin").attr("data-original-title",
                      "<h4>KALINAWAN</h4>\
                      <img src='images/kalinawan_tooltip_img.jpg' style='width: 10rem;'>");

$("#pipindan-pin").tooltip({
    html: true,
});
$("#pipindan-pin").attr("data-original-title",
                      "<h4>PIPINDAN</h4>\
                      <img src='images/pipindan_tooltip_img.jpg' style='width: 10rem;'>");

$("#kasile-pin").tooltip({
    html: true,
});
$("#kasile-pin").attr("data-original-title",
                        "<h4>KASILE</h4>\
                        <img src='images/kasile_tooltip_img.jpg' style='width: 10rem;'>");

$("#bombong-pin").tooltip({
    html: true,
});
$("#bombong-pin").attr("data-original-title",
                        "<h4>BOMBONG</h4>\
                        <img src='images/bombong_tooltip_img.jpg' style='width: 10rem;'>");

$("#kinaboogan-pin").tooltip({
    html: true,
});
$("#kinaboogan-pin").attr("data-original-title",
                        "<h4>KINABOOGAN</h4>\
                        <img src='images/kinaboogan_tooltip_img.jpg' style='width: 10rem;'>");

$("#kinagatan-pin").tooltip({
    html: true,
});
$("#kinagatan-pin").attr("data-original-title",
                        "<h4>KINAGATAN</h4>\
                        <img src='images/kinagatan_tooltip_img.jpg' style='width: 10rem;'>");

$("#bangad-pin").tooltip({
    html: true,
});
$("#bangad-pin").attr("data-original-title",
                        "<h4>BANGAD</h4>\
                        <img src='images/bangad_tooltip_img.jpg' style='width: 10rem;'>");

$("#buhangin-pin").tooltip({
    html: true,
});
$("#buhangin-pin").attr("data-original-title",
                        "<h4>BUHANGIN</h4>\
                        <img src='images/buhangin_tooltip_img.jpg' style='width: 10rem;'>");

$("#janosa-pin").tooltip({
    html: true,
});
$("#janosa-pin").attr("data-original-title",
                        "<h4>JANOSA</h4>\
                        <img src='images/janosa_tooltip_img.jpg' style='width: 10rem;'>");

$("#kaytome-pin").tooltip({
    html: true,
});
$("#kaytome-pin").attr("data-original-title",
                        "<h4>KAYTOME</h4>\
                        <img src='images/kaytome_tooltip_img.jpg' style='width: 10rem;'>");

$("#gulod-pin").tooltip({
    html: true,
});
$("#gulod-pin").attr("data-original-title",
                        "<h4>GULOD</h4>\
                        <img src='images/gulod_tooltip_img.jpg' style='width: 10rem;'>");

$("#sapang-pin").tooltip({
    html: true,
});
$("#sapang-pin").attr("data-original-title",
                        "<h4>SAPANG</h4>\
                        <img src='images/sapang_tooltip_img.jpg' style='width: 10rem;'>");

$("#malakaban-pin").tooltip({
    html: true,
});
$("#malakaban-pin").attr("data-original-title",
                        "<h4>MALAKABAN</h4>\
                        <img src='images/malakaban_tooltip_img.jpg' style='width: 10rem;'>");
                    
$("#pinagdilawan-pin").tooltip({
    html: true,
});
$("#pinagdilawan-pin").attr("data-original-title",
                        "<h4>PINAGDILAWAN</h4>\
                        <img src='images/pinagdilawan_tooltip_img.jpg' style='width: 10rem;'>");

$("#sanay-pin").tooltip({
    html: true,
});
$("#sanay-pin").attr("data-original-title",
                        "<h4>GINOONG SANAY</h4>\
                        <img src='images/sanay_tooltip_img.jpg' style='width: 10rem;'>");

$("#binitagan-pin").tooltip({
    html: true,
});
$("#binitagan-pin").attr("data-original-title",
                        "<h4>BINITAGAN</h4>\
                        <img src='images/binitagan_tooltip_img.jpg' style='width: 10rem;'>");

$("#tabon-pin").tooltip({
    html: true,
});
$("#tabon-pin").attr("data-original-title",
                        "<h4>TABON</h4>\
                        <img src='images/tabon_tooltip_img.jpg' style='width: 10rem;'>");

$("#habagatan-pin").tooltip({
    html: true,
});
$("#habagatan-pin").attr("data-original-title",
                        "<h4>HINABAGATAN</h4>\
                        <img src='images/hinabagatan_tooltip_img.jpg' style='width: 10rem;'>");

$("#rayap-pin").tooltip({
    html: true,
});
$("#rayap-pin").attr("data-original-title",
                        "<h4>RAYAP</h4>\
                        <img src='images/rayap_tooltip_img.jpg' style='width: 10rem;'>");

$("#macamot-pin").tooltip({
    html: true,
});
$("#macamot-pin").attr("data-original-title",
                        "<h4>MACAMOT</h4>\
                        <img src='images/macamot_tooltip_img.jpg' style='width: 10rem;'>");

