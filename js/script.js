//set all menu function, show all menu
function allMenu (){
    $.getJSON('data/pizza.json', function(data){
        //data objek
        let menu = data.menu;
        $.each(menu, function(i,data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+ data.gambar +'" ><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');   
        });
    });    
}

//show all menu
allMenu();

$('.nav-link').on('click', function () {
    //highlight selected button
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    //replace H1 using kategori
    let kategori = $(this).html();
    $('h1').html(kategori);

    //show all menu for kategori == All menu
    if(kategori ==  'All Menu'){
        allMenu();
        //set return to getout from main function
        return;
    }

    //paparkan menu mengikut kategori
    $.getJSON('data/pizza.json', function(data){
        //data objek
        let menu = data.menu;
        let content ='';

        $.each(menu, function(i,data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+ data.gambar +'" ><div class="card-body"><h5 class="card-title">'+ data.nama+'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
            }
        });

        $('#daftar-menu').html(content);
    });
});