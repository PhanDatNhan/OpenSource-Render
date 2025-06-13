# WebGIS - Dự án Hệ thống bản đồ mã nguồn mở

## Giới thiệu
Đây là dự án WebGIS cơ bản phục vụ nhập môn phát triển phần mềm GIS mã nguồn mở. Ứng dụng cho phép hiển thị bản đồ nền, các lớp dữ liệu địa lý từ GeoServer, lấy thông tin đối tượng trên bản đồ, tích hợp dữ liệu thời tiết và hỗ trợ lưu thông tin liên hệ người dùng vào MongoDB.

## Tính năng chính
- Giao diện đơn giản, dễ sử dụng, responsive trên nhiều thiết bị.
- Hiển thị đa lớp bản đồ: OSM, WMS từ GeoServer (có thể bật/tắt).
- Lấy thông tin đối tượng trên bản đồ bằng GetFeatureInfo.
- Tích hợp dữ liệu thời tiết theo vị trí click trên bản đồ.
- Lưu thông tin liên hệ người dùng vào MongoDB qua API.
- Có thể triển khai thành website bất kỳ lúc nào.

## Cấu trúc thư mục
```
GisMap2/
├── public/
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   ├── map.html
│   └── images/
├── server.js
├── package.json
├── .env
```

## Yêu cầu hệ thống
- Node.js >= 18.x
- MongoDB (có thể dùng MongoDB Atlas)
- GeoServer (cài đặt riêng, cấu hình dữ liệu WMS)

## Cài đặt & chạy dự án

1. **Clone dự án**
   ```
   git clone <link-repo>
   cd GisMap2
   ```

2. **Cài đặt thư viện**
   ```
   npm install
   ```

3. **Cấu hình biến môi trường**
   - Tạo file `.env` với nội dung:
     ```
     MONGODB_URI=<chuỗi kết nối MongoDB>
     PORT=3000
     ```
   - Ví dụ chuỗi kết nối MongoDB Atlas:
     ```
     MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
     ```

4. **Chạy server**
   ```
   npm start
   ```
   - Server sẽ chạy tại `http://localhost:3000`

5. **Truy cập giao diện**
   - Mở trình duyệt và truy cập `http://localhost:3000`

## Tùy chỉnh GeoServer/WMS
- Để hiển thị dữ liệu từ GeoServer khác, sửa các biến `baseUrl`, `workspace`, `layerName` trong file `public/Project_1.js` cho phù hợp với GeoServer bạn muốn sử dụng.
- Có thể thêm layer WMS public từ bên ngoài theo hướng dẫn trong code.

## Đóng góp & phát triển
- Fork, tạo nhánh mới và gửi pull request nếu muốn đóng góp.
- Có thể mở rộng thêm các tính năng GIS, phân quyền, phân tích không gian, v.v.

## Nhóm phát triển
- Đinh Hồng Lĩnh
- Trần Thị Như Ngọc
- Nguyễn Nhật Minh
- Hồ Mạnh Tường
- Phan Đạt Nhân

## Giấy phép
Dự án sử dụng cho mục đích học tập, nghiên cứu và phát triển mã nguồn mở.
