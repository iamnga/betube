export const configs = {
  domain: "http://movie0706.cybersoft.edu.vn",
  groupID: "GP01",
  apiRoutes: {
    home: {
      getListFilms: "/api/QuanLyPhim/LayDanhSachPhim?MaNhom=",
      getListSystemTheaters: "/api/QuanLyRap/LayThongTinHeThongRap",
      getListTheaters: "/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=",
      getListTheatersShowtimes:
        "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=",
      getListShowtimes: "/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=",
      getListTicketRoom: "/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=",
      postSignUp: "/api/QuanLyNguoiDung/DangKy",
      postSignIn: "/api/QuanLyNguoiDung/DangNhap",
      postCustomerInfo: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      putUpdateCustomerInfo: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung"
    },
    admin: {
        customer:{
            postAddCustomer: '/api/QuanLyNguoiDung/ThemNguoiDung',
            deleteCustomer: '/api/QuanLyNguoiDung/XoaNguoiDung',
            putUpdateCustomer: '/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            getSearchCustomer: '/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa='
        },
        film: {
            postAddFilm: '/api/QuanLyPhim/ThemPhim',
            deleteFilm: '/api/QuanLyPhim/XoaPhim?MaPhim=',
            putUpdateFilm: '/api/QuanLyPhim/CapNhatPhim',
            putUpdateImage: '/api/QuanLyPhim/UploadHinhAnhPhim'
        },
        showTimes:{
            postAddShowTime: '/api/QuanLyDatVe/TaoLichChieu'
        }
    }
  },
  params: {
    filmName: "&tenPhim=",
    systemTheaterID: "&maHeThongRap=",
    groupID: "&MaNhom="
  }
};
