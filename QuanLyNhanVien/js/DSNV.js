function DSNV(){
    this.arrNV=[]
    this.themNV=function(){}
    //Nếu trả về -1 là ko có sinh viên nào chứa mã sinh viên cần tìm
    this.timNV=function(tkNhanVien){
        
        for (var i = 0;i<this.arrNV.length;i++){
            var tkNV = this.arrNV[i].taiKhoan
            if(tkNV === tkNhanVien){
                return i
            }
        }
        return -1
    }
    this.xoaNV=function(tkNhanVien){
        //B1 : tìm index của phần tử cần xóa dựa vào thuộc tính tài khoản 
        var index = -1
        for (var i = 0;i<this.arrNV.length;i++){
            var tkNV = this.arrNV[i].taiKhoan
            if(tkNV === tkNhanVien){
                index = i
            }
        }
        if(index !== -1){
            this.arrNV.splice(index,1)
        }
    }
    this.capNhatNV=function(tkNhanVien,nhanVienUpdate){
            var index = this.timNV(tkNhanVien)
    if(index !== -1){
        this.arrNV[index] = nhanVienUpdate
    }
}}