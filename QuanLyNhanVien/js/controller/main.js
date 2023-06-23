var dsnv = new DSNV()

getLocalStorage()

function getThongTinNV(){
    var taiKhoan = document.getElementById('tknv').value
    var hoTen = document.getElementById('name').value
    var email = document.getElementById('email').value
    var matKhau = document.getElementById('password').value
    var ngayLam = document.getElementById('datepicker').value
    var luongCoBan = document.getElementById('luongCB').value
    var chucVu = document.getElementById('chucvu').value
    var gioLam = document.getElementById('gioLam').value
}

document.getElementById('btnThemNV').onclick=function(){
    var taiKhoan = document.getElementById('tknv').value
    var hoTen = document.getElementById('name').value
    var email = document.getElementById('email').value
    var matKhau = document.getElementById('password').value
    var ngayLam = document.getElementById('datepicker').value
    var luongCoBan = document.getElementById('luongCB').value
    var chucVu = document.getElementById('chucvu').value
    var gioLam = document.getElementById('gioLam').value


    var nhanVien = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,luongCoBan,chucVu,gioLam)

   
    
   dsnv.arrNV.push(nhanVien)
   
   renderDSNV()
   setLocalStorage()

   validation()

}
function renderDSNV(){
    var content = ''
    for(var i=0 ; i<dsnv.arrNV.length;i++){
        var nv = dsnv.arrNV[i]
        content +=`
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongTienLuong()}</td>
            <td>${nv.xepLoai()}</td>
            <td>
             <button class='btn btn-success mb-2' onclick="updateNV('${nv.taiKhoan}')">Edit</button>
             <button class='btn btn-danger' onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
            
            </td>
           
        </tr>
        `
    }
    document.getElementById('tableDanhSach').innerHTML=content
}


function setLocalStorage(){
    var data = JSON.stringify(dsnv.arrNV)
    localStorage.setItem('DSNV',data)

}
function getLocalStorage(){
    var data = localStorage.getItem('DSNV')
    if(data){
    var parsedata = JSON.parse(data)
        //B1 tạo mảng rỗng để lưu danh sách sinh viên để lấy lại phương thức
        var arr = []
        //B2 : duyệt mảng đc lấy từ local
        for(var i=0; i<parsedata.length;i++){
            var nv = parsedata[i]
            var nhanVien = new NhanVien(nv.taiKhoan,nv.hoTen,nv.email,nv.matKhau,nv.ngayLam,nv.luongCoBan,nv.chucVu,nv.gioLam)
            arr.push(nhanVien)
        }
        

    dsnv.arrNV = arr
    renderDSNV()
}
}

function deleteNV(taiKhoan){
dsnv.xoaNV(taiKhoan)
renderDSNV();
//cập nhật lại data lưu dưới localStorage
setLocalStorage()
}


function updateNV(taiKhoan){
    var index = dsnv.timNV(taiKhoan)
    var nv =dsnv.arrNV[index]
    console.log(nv)


     document.getElementById('tknv').value = nv.taiKhoan
     document.getElementById('name').value = nv.hoTen
     document.getElementById('email').value = nv.email
     document.getElementById('password').value = nv.matKhau
    document.getElementById('datepicker').value= nv.ngayLam
     document.getElementById('luongCB').value = nv.luongCoBan
     document.getElementById('chucvu').value = nv.chucVu
     document.getElementById('gioLam').value = nv.gioLam
    }
    document.getElementById('btnCapNhat').onclick=function(){
        var nhanVien = getThongTinNV()
        dsnv.capNhatNV(nhanVien)
        
        renderDSNV()
        setLocalStorage()
    }

    function validation(){
        var taiKhoan = document.getElementById('tknv')
    var hoTen = document.getElementById('name')
    var email = document.getElementById('email')
    var matKhau = document.getElementById('password')
    var ngayLam = document.getElementById('datepicker')
    var luongCoBan = document.getElementById('luongCB')
    var chucVu = document.getElementById('chucvu')
    var gioLam = document.getElementById('gioLam')
        if(taiKhoan.value !== ''){
            if(taiKhoan.value.trim().length>=6){
                alert('Tài khoản tối đa 4-6 chữ số') 
                taiKhoan.focus();
               
            }
        }else{
            alert ('Vui lòng nhập tài khoản')
            taiKhoan.focus();
            
        }
           
    }