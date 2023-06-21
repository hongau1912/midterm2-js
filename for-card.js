var arrShoeFootball = [
    {
        id: 1,
        name: "Nike Phantom GX Club Dynamic Fit MG",
        price: "2,039,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b03d953-1c91-4f3c-a594-1bfd61ec64ac/phantom-gx-club-dynamic-fit-mg-multi-ground-football-boot-24PQkr.png"

    },
    {
        id: 2,
        name: "Nike Gripknit Phantom GX Elite FG",
        price: "7,319,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c5815f3-4487-49f8-92d0-02c44ae906fb/gripknit-phantom-gx-elite-fg-football-boot-6t4Xff.png"

    },
    {
        id: 3,
        name: "Nike Zoom Mercurial 9 Elite XXV FG",
        price: "8,059,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f56ebbc8-9c68-4e2b-a3cb-01f6f57083c0/zoom-mercurial-superfly-9-elite-xxv-fg-football-boot-RxNPgm.png"

    },
    {
        id: 4,
        name: "Nike Zoom Mercurial 9 Academy MG",
        price: "2,779,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8922dd3f-207f-4f24-95bc-ee827f9457f5/zoom-mercurial-superfly-9-academy-mg-multi-ground-football-boot-HRT6gf.png"

    }

]

var arrShoeLifeStyle = [
    {
        id: 1,
        name: "Nike Dunk Mid",
        price: "3,369,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cbc00fd0-6145-470c-97f5-24f96b161913/dunk-mid-shoes-6m6jH7.png"

    },
    {
        id: 2,
        name: "Nike Blazer Low '77 Vintage",
        price: "2,499,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f031c6e2-5941-4bb7-a29d-31683f5d4da2/blazer-low-77-vintage-shoes-HmmkdX.png"

    },
    {
        id: 3,
        name: "Air Jordan 1 Low FlyEase",
        price: "3,829,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9259e44d-8e6a-4253-aefa-7db9720ea2b4/air-jordan-1-low-flyease-easy-on-off-shoes-SsT4HK.png"

    },
    {
        id: 4,
        name: "Nike Air Presto",
        price: "4,109,000₫",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7cd6bbb4-f273-4a59-96d7-8a118a76db2a/air-presto-shoes-zcCqXJ.png"

    }

]
function fShoeFootball() {
    const shoeFootball = document.getElementById("shoe-football");
    let item = "";
    for (i = 0; i < arrShoeFootball.length; i++) {
        item += `
                    <div class="card">
                        <img class="card-img-top" src="${arrShoeFootball[i].image}" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h6 class="card-title"><b>${arrShoeFootball[i].name}</b></h6>
                            <p class="card-text">${arrShoeFootball[i].price}</p>
                            <div class="btn1">
                                <a onclick="muaNgay()" href="#" class="btn btn-primary" style = "background-color: #2A7BFF;">Mua ngay</a>
                                <a onclick="capNhatFootball(${arrShoeFootball[i].id})" href="#" class="btn btn-primary" style = "background-color: #FDC109;"><i class="bi bi-pencil-square"></i></a>
                                <a onclick="xoaFootball(${arrShoeFootball[i].id})" href="#" class="btn btn-primary" style = "background-color: #DC3545;"><i class="bi bi-trash3-fill"></i></a>
                            </div>
                        </div>
                    </div>
                `
    }
    shoeFootball.innerHTML = item;
}
fShoeFootball();

function fShoeLifeStyle() {
    const shoeLifeStyle = document.getElementById("shoe-lifestyle");
    let item1 = "";
    for (i = 0; i < arrShoeLifeStyle.length; i++) {
        item1 += `
                    <div class="card">
                        <img class="card-img-top" src="${arrShoeLifeStyle[i].image}" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h6 class="card-title"><b>${arrShoeLifeStyle[i].name}</b></h6>
                            <p class="card-text">${arrShoeLifeStyle[i].price}</p>
                            <div class="btn1">
                                <a onclick="muaNgay()" href="#" class="btn btn-primary" style = "background-color: #2A7BFF;">Mua ngay</a>
                                <a onclick="capNhatLifeStyle(${arrShoeLifeStyle[i].id})" href="#" class="btn btn-primary" style = "background-color: #FDC109;"><i class="bi bi-pencil-square"></i></a>
                                <a onclick="xoaLifeStyle(${arrShoeLifeStyle[i].id})" href="#" class="btn btn-primary" style = "background-color: #DC3545;"><i class="bi bi-trash3-fill"></i></a>
                            </div>
                        </div>
                    </div>
                `
    }
    shoeLifeStyle.innerHTML = item1;
}
fShoeLifeStyle();

function muaNgay() {
    alert("Mua thành công!")
}
document.getElementById("btn1").onclick = xuLyFootball;
function xuLyFootball() {
    document.getElementById("shoe-lifestyle").classList.add("hide");
    document.getElementById("btn1").classList.add("light");
    document.getElementById("btn2").classList.remove("light");
    document.getElementById("shoe-football").classList.remove("hide");

}
xuLyFootball()
document.getElementById("btn2").onclick = xuLyLifeStyle;
function xuLyLifeStyle() {
    document.getElementById("btn2").classList.add("light");
    document.getElementById("shoe-football").classList.add("hide");
    document.getElementById("shoe-lifestyle").classList.remove("hide");
    document.getElementById("btn1").classList.remove("light");
}

var idup = 5;
function themSanPham() {
    var id = idup;
    var name = document.getElementById("txtName").value;
    var price = document.getElementById("txtPrice").value;
    var type = document.getElementById("cmbType").value;
    var image = xuLyHinhAnh();

    if (name != '' && price != '' && type != '' && image != '') {
        if (type == '1') {
            var typeFootball = { id, name, price, image };
            arrShoeFootball.push(typeFootball);
            idup++;
            fShoeFootball();
            console.log(arrShoeFootball);
        } else {
            var typeLifestyle = { id, name, price, image };
            arrShoeLifeStyle.push(typeLifestyle);
            idup++;
            fShoeLifeStyle();
            console.log(arrShoeLifeStyle);
        }
        document.getElementById("txtName").value = '';
        document.getElementById("txtPrice").value = '';
        document.getElementById("cmbType").value = '';
        document.getElementById("txtImg").value = '';
    } else {
        alert("Nhập lại");
    }
}

function xuLyHinhAnh() {
    let xulyFile = document.getElementById("txtImg").files[0];
    if (xulyFile == undefined) {
        return "";
    }
    let urlanh = URL.createObjectURL(xulyFile);
    return urlanh;
}

function xoaFootball(id) {
    for (var i = 0; i < arrShoeFootball.length; i++) {
        if (id == arrShoeFootball[i].id) {
            arrShoeFootball.splice(i, 1);
            fShoeFootball();
            break;
        }
    }
}

function xoaLifeStyle(id) {
    for (var i = 0; i < arrShoeLifeStyle.length; i++) {
        if (id == arrShoeLifeStyle[i].id) {
            arrShoeLifeStyle.splice(i, 1);
            fShoeLifeStyle();
            break;
        }
    }
}
// me
var layID = null;
var layType = null;
function capNhatFootball(id) {
    for (var i = 0; i < arrShoeFootball.length; i++) {
        if (id == arrShoeFootball[i].id) {
            layID = id;
            layType = '1';
            document.getElementById("txtName").value = arrShoeFootball[i].name;
            document.getElementById("txtPrice").value = arrShoeFootball[i].price;
            document.getElementById("cmbType").value = '1';
            document.getElementById("txtImg").value = arrShoeFootball[i].image;
            break;
        }
    }
}

function capNhatLifeStyle(id) {
    for (var i = 0; i < arrShoeLifeStyle.length; i++) {
        if (id == arrShoeLifeStyle[i].id) {
            layID = id;
            layType = '0';
            document.getElementById("txtName").value = arrShoeLifeStyle[i].name;
            document.getElementById("txtPrice").value = arrShoeLifeStyle[i].price;
            document.getElementById("cmbType").value = '0';
            document.getElementById("txtImg").value = arrShoeLifeStyle[i].image;
            break;
        }
    }
}

function luuCapNhat() {
    let findID = document.getElementById("cmbType").value;
    if (layType == '1') {
        if (findID == '1') {
            for (var i = 0; i < arrShoeFootball.length; i++) {
                if (layID == arrShoeFootball[i].id) {
                    arrShoeFootball[i].name = document.getElementById("txtName").value;
                    arrShoeFootball[i].price = document.getElementById("txtPrice").value;
                    arrShoeFootball[i].type = document.getElementById("cmbType").value;
                    arrShoeFootball[i].image = xuLyHinhAnh();
                    fShoeFootball();
                    break;
                }
            }
        } else {
            for (var i = 0; i < arrShoeFootball.length; i++) {
                if (layID == arrShoeFootball[i].id) {
                    let luuThongTin = { id: idup, name: document.getElementById("txtName").value, price: document.getElementById("txtPrice").value, image: arrShoeFootball[i].image }
                    arrShoeLifeStyle.push(luuThongTin);
                    idup++;
                    arrShoeFootball.splice(i, 1)
                    fShoeFootball();
                    fShoeLifeStyle();
                    break;
                }
            }
        }
    } else {
        if (findID == '0') {
            for (var i = 0; i < arrShoeLifeStyle.length; i++) {
                if (layID == arrShoeLifeStyle[i].id) {
                    arrShoeLifeStyle[i].name = document.getElementById("txtName").value;
                    arrShoeLifeStyle[i].price = document.getElementById("txtPrice").value;
                    arrShoeLifeStyle[i].type = document.getElementById("cmbType").value;
                    arrShoeLifeStyle[i].image = xuLyHinhAnh();
                    fShoeLifeStyle();
                    break;
                }
            }
        } else {
            for (var i = 0; i < arrShoeLifeStyle.length; i++) {
                if (layID == arrShoeLifeStyle[i].id) {
                    let luuThongTin = { id: idup, name: document.getElementById("txtName").value, price: document.getElementById("txtPrice").value, image: arrShoeFootball[i].image }
                    arrShoeFootball.push(luuThongTin);
                    idup++;
                    arrShoeLifeStyle.splice(i, 1)
                    fShoeFootball();
                    fShoeLifeStyle();
                    break;
                }
            }
        }
    }
    document.getElementById("txtName").value = '';
    document.getElementById("txtPrice").value = '';
    document.getElementById("cmbType").value = '';
    document.getElementById("txtImg").value = '';
    layID = null;
    layType = null;
}