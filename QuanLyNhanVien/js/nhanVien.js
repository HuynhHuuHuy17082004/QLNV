function NhanVien(_taiKhoan,_hoTen,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam,_tongLuong,_loaiNV){
    this.taiKhoan=_taiKhoan
    this.hoTen=_hoTen
    this.email=_email
    this.matKhau=_matKhau
    this.ngayLam=_ngayLam
    this.luongCoBan=_luongCoBan
    this.chucVu=_chucVu
    this.gioLam=_gioLam
    this.tongLuong=_tongLuong
    this.loaiNV=_loaiNV


    this.tongTienLuong=function(){
        if(this.chucVu==='Sếp'){
        return this.luongCoBan*3
        }else if(this.chucVu==='Trưởng phòng'){
        return this.luongCoBan*2
        }else if(this.chucVu ==='Nhân viên'){
        return this.luongCoBan*1
        }else{
            return 0
        }
    }

    this.xepLoai=function(){
        if(this.gioLam>=192){
            return 'Xuất sắc'
        }else if(this.gioLam>=176 && this.gioLam<192){
            return 'Giỏi'
        }else if(this.gioLam>=160 && this.gioLam<176){
            return 'Khá'
        }else if(this.gioLam<160){
            return 'Trung bình'
        }else{
            return ''
        }
    }
}