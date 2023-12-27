-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 27, 2021 lúc 12:34 PM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `vexere`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chuyenxe`
--

CREATE TABLE `chuyenxe` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_lotrinh` int(10) UNSIGNED DEFAULT NULL,
  `id_nhanvien` int(10) UNSIGNED DEFAULT NULL,
  `id_xe` int(10) UNSIGNED DEFAULT NULL,
  `giave` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trangthai` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chuyenxe`
--

INSERT INTO `chuyenxe` (`id`, `id_lotrinh`, `id_nhanvien`, `id_xe`, `giave`, `trangthai`, `created_at`, `updated_at`) VALUES
(16, 1, 1, 1, '250000', 1, '2021-11-25 03:18:34', '2021-11-25 03:18:34'),
(19, 1, 5, 9, '500000', 1, '2021-11-25 03:19:28', '2021-11-25 03:19:28'),
(20, 1, 2, 6, '300000', 1, '2021-11-25 03:23:03', '2021-11-25 03:23:03'),
(21, 1, 3, 4, '350000', 1, '2021-11-25 03:23:46', '2021-11-25 03:23:46'),
(23, 2, 1, 1, '250000', 1, '2021-11-25 03:27:45', '2021-11-25 03:27:45'),
(24, 5, 1, 4, '450000', 1, '2021-11-25 03:29:44', '2021-11-25 03:29:44'),
(25, 3, 5, 6, '150000', 1, '2021-11-25 03:31:02', '2021-11-25 03:31:02');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diadiem`
--

CREATE TABLE `diadiem` (
  `id` int(10) UNSIGNED NOT NULL,
  `tendiadiem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `diadiem`
--

INSERT INTO `diadiem` (`id`, `tendiadiem`, `created_at`, `updated_at`) VALUES
(2, 'Bà Rịa - Vũng Tàu', NULL, NULL),
(3, 'Bắc Giang', NULL, NULL),
(4, 'Bắc Kạn', NULL, NULL),
(5, 'Bạc Liêu', NULL, NULL),
(6, 'Bắc Ninh', NULL, NULL),
(7, 'Bến Tre', NULL, NULL),
(8, 'Bình Định', NULL, NULL),
(9, 'Bình Dương', NULL, NULL),
(10, 'Bình Phước', NULL, NULL),
(11, 'Bình Thuận', NULL, NULL),
(12, 'Cà Mau', NULL, NULL),
(13, 'Cao Bằng', NULL, NULL),
(14, 'Đắk Lắk', NULL, NULL),
(15, 'Đắk Nông', NULL, NULL),
(16, 'Điện Biên', NULL, NULL),
(17, 'Đồng Nai', NULL, NULL),
(18, 'Đồng Tháp', NULL, NULL),
(19, 'Gia Lai', NULL, NULL),
(20, 'Hà Giang', NULL, NULL),
(21, 'Hà Nam', NULL, NULL),
(22, 'Hà Tĩnh', NULL, NULL),
(23, 'Hải Dương', NULL, NULL),
(24, 'Hậu Giang', NULL, NULL),
(25, 'Hòa Bình', NULL, NULL),
(26, 'Hưng Yên', NULL, NULL),
(27, 'Khánh Hòa', NULL, NULL),
(28, 'Kiên Giang', NULL, NULL),
(29, 'Kon Tum', NULL, NULL),
(30, 'Lai Châu', NULL, NULL),
(31, 'Lâm Đồng', NULL, NULL),
(32, 'Lạng Sơn', NULL, NULL),
(33, 'Lào Cai', NULL, NULL),
(34, 'Long An', NULL, NULL),
(35, 'Nam Định', NULL, NULL),
(36, 'Nghệ An', NULL, NULL),
(37, 'Ninh Bình', NULL, NULL),
(38, 'Ninh Thuận', NULL, NULL),
(39, 'Phú Thọ', NULL, NULL),
(40, 'Quảng Bình', NULL, NULL),
(41, 'Quảng Nam', NULL, NULL),
(42, 'Quảng Ngãi', NULL, NULL),
(43, 'Quảng Ninh', NULL, NULL),
(44, 'Quảng Trị', NULL, NULL),
(45, 'Sóc Trăng', NULL, NULL),
(46, 'Sơn La', NULL, NULL),
(47, 'Tây Ninh', NULL, NULL),
(48, 'Thái Bình', NULL, NULL),
(49, 'Thái Nguyên', NULL, NULL),
(50, 'Thanh Hóa', NULL, NULL),
(51, 'Thừa Thiên Huế', NULL, NULL),
(52, 'Tiền Giang', NULL, NULL),
(53, 'Trà Vinh', NULL, NULL),
(54, 'Tuyên Quang', NULL, NULL),
(55, 'Vĩnh Long', NULL, NULL),
(56, 'Vĩnh Phúc', NULL, NULL),
(57, 'Yên Bái', NULL, NULL),
(58, 'Phú Yên', NULL, NULL),
(59, 'Cần Thơ', NULL, NULL),
(60, 'Đà Nẵng', NULL, NULL),
(61, 'Hải Phòng', NULL, NULL),
(62, 'Hà Nội', NULL, NULL),
(63, 'TP HCM', NULL, NULL),
(64, 'An Giang', '2021-11-07 07:34:25', '2021-11-07 07:34:25'),
(65, 'Sài Gòn', '2021-11-08 10:26:39', '2021-11-08 10:26:39'),
(66, 'Đà Lạt', '2021-11-08 11:05:56', '2021-11-08 11:05:56');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `diemdontra`
--

CREATE TABLE `diemdontra` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tuyenduong` int(10) UNSIGNED DEFAULT NULL,
  `diemdon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diemtra` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `diemdontra`
--

INSERT INTO `diemdontra` (`id`, `id_tuyenduong`, `diemdon`, `diemtra`, `created_at`, `updated_at`) VALUES
(1, 1, 'Mỹ Đình', 'Móng Cái', '2021-07-24 09:46:24', '2021-07-24 09:46:24'),
(2, 2, 'Gia Lâm', 'Ninh Bình', '2021-07-24 09:46:24', '2021-07-24 09:46:24'),
(3, 4, 'Cầu Giấy', 'Quận 7', '2021-11-08 10:28:34', '2021-11-08 10:28:34'),
(4, 16, 'Cẩm Phả', 'Lâm Đồng', '2021-11-08 11:09:30', '2021-11-08 11:09:30'),
(5, 2, 'Cầu giấy', 'Cát Linh', '2021-11-24 06:59:11', '2021-11-24 06:59:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dondatve`
--

CREATE TABLE `dondatve` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_xe` int(10) UNSIGNED DEFAULT NULL,
  `id_user` int(10) UNSIGNED DEFAULT NULL,
  `id_chuyenxe` int(10) UNSIGNED DEFAULT NULL,
  `diemdon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diemtra` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vitri` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `soluongve` int(11) NOT NULL,
  `tongtien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trangthai` int(11) NOT NULL,
  `destroy` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `dondatve`
--

INSERT INTO `dondatve` (`id`, `id_xe`, `id_user`, `id_chuyenxe`, `diemdon`, `diemtra`, `vitri`, `soluongve`, `tongtien`, `trangthai`, `destroy`, `created_at`, `updated_at`) VALUES
(2, 9, 1, 19, 'Gia Lâm', 'Cát Linh', 'A-1,A-2,A-5', 3, '1500000', 1, 3, '2021-11-25 03:25:22', '2021-11-25 03:25:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `loaixe`
--

CREATE TABLE `loaixe` (
  `id` int(10) UNSIGNED NOT NULL,
  `tenloaixe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `soluongghe` int(11) NOT NULL,
  `sohang` int(11) NOT NULL,
  `socot` int(11) NOT NULL,
  `sodo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `loaixe`
--

INSERT INTO `loaixe` (`id`, `tenloaixe`, `soluongghe`, `sohang`, `socot`, `sodo`, `created_at`, `updated_at`) VALUES
(1, '1', 49, 12, 5, '110111101111011110111101111011110111101111011110111101111111', '2021-07-23 21:52:07', '2021-07-23 21:52:07'),
(2, '1', 25, 6, 5, '110111101111011110111101111111', '2021-07-23 21:52:33', '2021-07-23 21:52:33'),
(3, '1', 9, 4, 3, '101101101111', '2021-07-23 21:53:38', '2021-07-23 21:53:38'),
(4, '2', 50, 12, 5, '110111101111011110111101111111110111101111011110111101111111', '2021-07-23 21:54:10', '2021-07-23 21:54:10'),
(5, '2', 34, 8, 5, '1101111011110111111111011110111101111111', '2021-07-23 21:54:37', '2021-07-23 21:54:37'),
(6, '1', 25, 6, 5, '110111101111011110111101111111', '2021-11-23 19:00:58', '2021-11-23 19:00:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lotrinh`
--

CREATE TABLE `lotrinh` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_tuyenduong` int(10) UNSIGNED DEFAULT NULL,
  `tramdung` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thoigiandi` time NOT NULL,
  `thoigianden` time NOT NULL,
  `ngaydi` date NOT NULL,
  `ngayden` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lotrinh`
--

INSERT INTO `lotrinh` (`id`, `id_tuyenduong`, `tramdung`, `thoigiandi`, `thoigianden`, `ngaydi`, `ngayden`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, '09:00:00', '12:30:00', '2021-11-27', '2021-11-27', '2021-07-24 09:50:45', '2021-07-24 09:50:45'),
(2, 4, 'Nghệ An', '10:00:00', '14:00:00', '2021-11-20', '2021-11-20', '2021-07-24 09:51:23', '2021-07-24 09:51:23'),
(3, 16, NULL, '17:05:00', '21:06:00', '2021-11-24', '2021-11-24', '2021-08-14 07:06:08', '2021-08-14 07:06:08'),
(5, 5, NULL, '10:29:00', '10:29:00', '2021-11-24', '2021-11-24', '2021-11-25 03:29:26', '2021-11-25 03:29:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_05_18_112738_create_loaixe_table', 1),
(5, '2021_05_18_112751_create_diadiem_table', 1),
(6, '2021_05_18_112791_create_tuyenduong_table', 1),
(7, '2021_05_18_112792_create_diemdontra_table', 1),
(8, '2021_05_18_112800_create_lotrinh_table', 1),
(9, '2021_05_18_112823_create_nhanvien_table', 1),
(10, '2021_05_18_112831_create_xe_table', 1),
(11, '2021_05_18_112840_create_chuyenxe_table', 1),
(12, '2021_05_18_112853_create_dondatve_table', 1),
(13, '2021_05_18_112901_create_ve_table', 1),
(14, '2021_05_26_151026_create_payments_table', 1),
(15, '2021_05_28_034038_create_news_table', 1),
(16, '2021_06_01_012546_create_slides_table', 1),
(17, '2021_06_23_141856_create_roles_table', 1),
(18, '2021_06_23_141938_create_user_role_table', 1),
(19, '2021_06_23_142004_create_permissions_table', 1),
(20, '2021_06_23_142020_create_permission_role_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(10) UNSIGNED NOT NULL,
  `tieude` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slugnews` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mota` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `noidung` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `nguoidang` int(11) DEFAULT NULL,
  `nguoisua` int(11) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `news`
--

INSERT INTO `news` (`id`, `tieude`, `slugnews`, `image`, `mota`, `noidung`, `nguoidang`, `nguoisua`, `active`, `created_at`, `updated_at`) VALUES
(1, 'Hệ thống vé xe Limousine lớn nhất Việt Nam', 'he-thong-ve-xe-limousine-lon-nhat-viet-nam', '1637242378.jfif', NULL, '<h2>1. Xe limousine l&agrave; g&igrave;?</h2>\r\n\r\n<p>Xe limousine l&agrave; từ d&ugrave;ng để chỉ loại xe hạng thương gia cao cấp với nội thất v&agrave; khoang t&aacute;ch biệt giữa ghế ngồi v&agrave; ghế l&aacute;i. Limousine thường được thiết kế th&acirc;n d&agrave;i với khoảng c&aacute;ch lớn giữa c&aacute;c b&aacute;nh xe. Thường được c&aacute;c quan chức cấp cao, hoặc thương gia sử dụng. Thậm ch&iacute; trong xe cũng c&oacute; thể tổ chức tiệc ri&ecirc;ng nhờ độ rộng r&atilde;i v&agrave; trang bị tiện nghi. Sau n&agrave;y, giới độ xe đ&atilde; cho ra mắt sản phẩm xe limousine cải tiến được sử dụng bởi giới nghệ sĩ hoặc thương gia gi&agrave;u c&oacute;, phục vụ hội họp, di chuyển. Nhưng tại Việt Nam, nắm bắt được nhu cầu của h&agrave;nh kh&aacute;ch, c&aacute;c chủ h&atilde;ng xe mạnh dạn đầu tư d&ograve;ng xe hạng thương gia cho h&agrave;nh kh&aacute;ch di chuyển tr&ecirc;n nhiều tuyến đường du lịch. V&agrave; kh&ocirc;ng phụ l&ograve;ng mong đợi, h&agrave;nh kh&aacute;ch cực kỳ y&ecirc;u th&iacute;ch chất lượng của loại xe n&agrave;y. V&agrave; quan trọng ch&iacute;nh l&agrave; cảm gi&aacute;c m&agrave; chiếc xe mang đến cho người ngồi tr&ecirc;n n&oacute;. Vexere.com l&agrave; platform lớn nhất v&agrave; uy t&iacute;n nhất ở Việt Nam với hơn 500 h&atilde;ng xe limousine phủ rộng c&aacute;c tuyến đường tr&ecirc;n to&agrave;n quốc. Với sứ mệnh sinh ra để c&aacute;ch mạng ng&agrave;nh xe kh&aacute;ch Việt Nam, g&oacute;p phần cho h&agrave;nh tr&igrave;nh của bạn hạnh ph&uacute;c hơn, VeXeRe.com đ&atilde; v&agrave; đang l&agrave; bệ đỡ gi&uacute;p c&aacute;c h&atilde;ng xe limousine tiếp cận thị trường kh&aacute;ch VIP, c&aacute;c kh&aacute;ch h&agrave;ng th&iacute;ch nghi nhanh, y&ecirc;u th&iacute;ch sử dụng c&ocirc;ng nghệ v&agrave; thanh to&aacute;n online. Bằng tất cả nhiệt huyết, tinh thần d&aacute;m nghĩ d&aacute;m l&agrave;m, to&agrave;n thể đội ngũ VeXeRe đ&atilde; đem lại lượng kh&aacute;ch mới cho c&aacute;c h&atilde;ng xe trung b&igrave;nh tr&ecirc;n 20%, hay như tuyến đường Đ&agrave; Lạt với hơn 50%. Trong tương lai sắp tới, với sự ph&aacute;t triển của c&ocirc;ng nghệ, số lượng kh&aacute;ch h&agrave;ng truy cập v&agrave; thanh to&aacute;n online ng&agrave;y c&agrave;ng tăng, VeXeRe.com h&acirc;n hạnh l&agrave; người bạn đồng h&agrave;nh c&ugrave;ng c&aacute;c nh&agrave; xe tr&ecirc;n chặng đường mang lại cho h&agrave;nh kh&aacute;ch những chuyến đi an to&agrave;n v&agrave; tiện lợi nhất.</p>\r\n\r\n<h2>2. Lợi &iacute;ch xe VIP limousine mang lại:</h2>\r\n\r\n<p>&ndash; Chất lượng ghế/giường: Với sự thay đổi về mặt k&iacute;ch thước ghế, khiến chỗ của h&agrave;nh kh&aacute;ch rộng r&atilde;i hơn, Trang bị loại ghế đệm d&agrave;y khiến cho người nằm c&oacute; cảm gi&aacute;c &ecirc;m &aacute;i, thoải m&aacute;i. C&aacute;c chuyến xe d&ugrave; xa hay gần, thời gian ngồi ghế l&acirc;u cũng sẽ l&agrave;m h&agrave;nh kh&aacute;ch mệt mỏi. Nhưng với xe hạng thương gia, h&agrave;nh kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể thư gi&atilde;n v&agrave; nghỉ ngơi tr&ecirc;n xe dễ d&agrave;ng.</p>\r\n\r\n<p><img alt=\"Nội thất xe limousine ghế 9 chỗ\" src=\"https://lh3.googleusercontent.com/YiPk-kUcGzqYhGTiMjQcICIYq7z-IXWMTvrNT0nuWbPexzfNJq0dNOjjv6IlXK8r-QcMHuRmekTQJS4YxwEQUtc8kNfIpBcpPAWcZJga0bakQi2IQsr8XR83T57jvPtwiJ0hNKuW\" />Nội thất xe limousine ghế 9 chỗ</p>\r\n\r\n<p>- Nội thất: được l&agrave;m lại với c&aacute;c ghế bọc da chuẩn Ch&acirc;u u, kh&ocirc;ng chỉ &ecirc;m &aacute;i cho chuyến h&agrave;nh tr&igrave;nh xa, m&agrave; c&ograve;n m&aacute;t mẻ v&agrave; kh&ocirc;ng hề bị hầm b&iacute; như c&aacute;c ghế bọc da b&igrave;nh thường. K&egrave;m theo c&aacute;c ghế c&oacute; nhiều tiện nghi hiện đại như ti-vi, tủ lạnh mini, ổ cắm usb, đ&egrave;n đọc s&aacute;ch, hệ thống &acirc;m thanh cao cấp. Khoảng c&aacute;ch giữa c&aacute;c ghế, giường rất thoải m&aacute;i, kh&ocirc;ng nhồi nh&eacute;t. Lu&ocirc;n đ&aacute;p ứng được nhu cầu về sang trọng, thoải m&aacute;i v&agrave; tiện nghi trong việc di chuyển.</p>\r\n\r\n<p><img alt=\"Nội thất xe limousine giường\" src=\"https://lh4.googleusercontent.com/ObrjxJV-SoPhRb8T2msicjcvUeXGiMjyZ5zU9BXDWHmf6j_brOQmSC5wmpdj8reLdvg9rypn03uJXy3e1Izu-mGBYkcrtvu68fouksqjA0xLCHf3sA97M1V_mfVpyGZ4uuI4INUB\" />Nội thất xe limousine giường</p>\r\n\r\n<p>&ndash; Kh&ocirc;ng gian: Với khoảng c&aacute;ch rộng hơn giữa c&aacute;c ghế ngồi, kh&ocirc;ng gian ri&ecirc;ng tư của h&agrave;nh kh&aacute;ch sẽ thoải m&aacute;i hơn. Tr&aacute;nh được sự va chạm trong qu&aacute; tr&igrave;nh di chuyển với c&aacute;c h&agrave;nh kh&aacute;ch kh&aacute;c.</p>\r\n\r\n<p>&ndash; Tiện &iacute;ch: Được trang bị đầy đủ c&aacute;c tiện &iacute;ch th&ocirc;ng thường như m&aacute;y lạnh, chăn đắp, nước uống. Điểm cộng cho d&ograve;ng xe Vip l&agrave; c&oacute; th&ecirc;m tủ lạnh, ti vi led 19 inch, hệ thống đ&egrave;n chiếu s&aacute;ng đọc s&aacute;ch, bục g&aacute;c ch&acirc;n, v.v.. Nhằm đ&aacute;p ứng mọi nhu cầu v&agrave; mang lại sự thoải m&aacute;i nhất cho h&agrave;nh kh&aacute;ch.</p>\r\n\r\n<p><img alt=\"Nội thất xe giường cabin limousine\" src=\"https://lh5.googleusercontent.com/yB3P2Zy4w7pyqKAUvpKlGpP04BnEMhL69mhWolqVSQDKFqMTuIy9AJOuafjA_TA-Iu8IxBzdCeN1A1Dh39ElzK29axaigTNsra4HVxHfNfi6vWXTdQifgVIRpoUc0U-DdiG7e_9b\" />Nội thất xe giường cabin limousine</p>\r\n\r\n<p>&ndash; Thời gian di chuyển: Trong khi xe limousine ghế với k&iacute;ch thước nhỏ gọn, nhờ đ&oacute; thời gian di chuyển sẽ nhanh hơn, dễ d&agrave;ng hơn. Tiết kiệm được thời gian cho h&agrave;nh kh&aacute;ch. Th&igrave; xe limousine giường di chuyển đằm hơn, kh&ocirc;ng sợ x&oacute;c nảy nhiều dẫn đến say xe. B&ecirc;n cạnh đ&oacute;, k&iacute;ch thước giường khiến h&agrave;nh kh&aacute;ch c&oacute; thể nằm thẳng ch&acirc;n, thoải m&aacute;i hơn rất nhiều so với xe giường nằm thường.</p>\r\n\r\n<p>&ndash; Trung chuyển/Đ&oacute;n: Xe limousine ghế với k&iacute;ch thước nhỏ gọn, dễ d&agrave;ng chạy c&aacute;c tuyến đường trong trung t&acirc;m th&agrave;nh phố đ&oacute;n kh&aacute;ch. H&agrave;nh kh&aacute;ch kh&ocirc;ng c&ograve;n bị bắt buộc ra bến xe để đi, chỉ cần đặt chuyến xe trực tuyến v&agrave; chờ xe đến đ&oacute;n.</p>\r\n\r\n<h2>3. C&aacute;c loại xe limousine</h2>\r\n\r\n<p>Hiện tại c&oacute; 2 d&ograve;ng xe limousine tr&ecirc;n thị trường hiện nay l&agrave; limousine ghế v&agrave; limousine giường. - Limousine ghế: Được cải tiến từ xe ghế ngồi nhiều chỗ hơn, trang bị lại nội thất, gia cố khung xe.</p>\r\n\r\n<h3>A. Limousine ghế ngồi 10 chỗ, 12 chỗ</h3>\r\n\r\n<p>-&nbsp;<strong>Tuyến đường ph&ugrave; hợp cho d&ograve;ng xe Limousine ghế ngồi 10 chỗ, 12 chỗ:</strong>&nbsp;D&ugrave;ng cho tuyến đường ngắn tầm 200km đổ lại, thời gian di chuyển th&ocirc;ng dụng phổ biến trong v&ograve;ng 1h-4h. D&ograve;ng xe n&agrave;y ph&ugrave; hợp nhất cho c&aacute;c tuyến đường ngắn v&agrave; du lịch vd như S&agrave;i g&ograve;n - Vũng t&agrave;u, H&agrave; nội - Ninh b&igrave;nh,... Hơn 50% lượng xe hiện tại ở tuyến Vũng t&agrave;u l&agrave; d&ograve;ng xe limousine.</p>\r\n\r\n<p>-&nbsp;<strong>Sơ đồ ghế xe limousine</strong>&nbsp;thường chia l&agrave;m 3 khu vực. Khu vực đầu xe l&agrave; 2 ghế kế ghế t&agrave;i thường nhỏ v&agrave; kh&ocirc;ng ng&atilde; ra sau được. Khu vực 4-6 ghế giữa th&igrave; ngồi thoải m&aacute;i nhất v&agrave; ng&atilde; ra sau thoải m&aacute;i, đ&acirc;y l&agrave; nơi m&agrave; thường kh&aacute;ch h&agrave;ng hay ưu ti&ecirc;n chọn nhất. 3 ghế cuối ngồi s&aacute;t nhau, ng&atilde; ra cũng thoải m&aacute;i nhưng khu vực giữa xe nhưng &iacute;t được chọn hơn v&igrave; thường s&oacute;c hơn. Nhiều h&atilde;ng xe v&igrave; thế hay cho 3 khung gi&aacute; từ thấp đến cao cho 3 loại ghế đầu, cuối v&agrave; giữa tuỳ theo mức độ &ecirc;m &aacute;i để đảm bảo t&iacute;nh c&ocirc;ng bằng cho h&agrave;nh kh&aacute;ch.</p>\r\n\r\n<p>-&nbsp;<strong>Gi&aacute; v&eacute; trung b&igrave;nh d&ograve;ng xe limousine ghế ngồi&nbsp;</strong>thường để kh&aacute;ch h&agrave;ng dễ d&agrave;ng chấp nhận nhất v&agrave; tỉ lệ lấp đầy xe cao nhất l&agrave; tăng 60%-100% so với d&ograve;ng xe thường.</p>\r\n\r\n<p>-&nbsp;<strong>D&ograve;ng xe limousine n&agrave;y thường được độ tr&ecirc;n nền&nbsp;</strong>xe Ford 16 chỗ v&agrave; Huyndai Solati 16 chỗ. Hiện tại th&igrave; d&ograve;ng xe Huyndai Solati Limousine đang l&agrave; lựa chọn h&agrave;ng đầu của h&agrave;nh kh&aacute;ch đi xe v&igrave; rộng gấp &hellip; v&agrave; d&agrave;i gấp &hellip;. , cao gấp&hellip; xe Ford. C&aacute;c h&atilde;ng xe ở c&aacute;c tuyến đường lớn v&agrave; du lịch đang b&aacute;n lại c&aacute;c xe Ford limousine cho c&aacute;c h&atilde;ng xe nhỏ hơn ở c&aacute;c tuyến huyện để đầu tư xe mới Huyndai Solati Limousine</p>\r\n\r\n<ul>\r\n	<li>Ford Limousine:\r\n	<p><img alt=\"Nội thất Ford Limousine 9 chỗ\" src=\"https://lh3.googleusercontent.com/4-8LKUXX54g3oP-iySvVbIhxKObjmUFmnucj0iEN5us_xoz-B4Z3BTzWTmjk7wnOVkAqiKhXEnDOGVINGYoI0Z-f9tQfc95_59ahL01mSmLJJnaDZ9IV91hN3Xo-3kqbpt2ECk9z\" />Nội thất Ford Limousine 9 chỗ</p>\r\n	</li>\r\n	<li>Huyndai Solati Limousine:\r\n	<p><img alt=\"Nội thất Solati Limousine\" src=\"https://lh3.googleusercontent.com/FH_k6Bz5jr6lvZhotdfw308oSy95zBGtrnfVZY8AMDlOOW6XeMWuFnvBbBMVXMZk49K0BuK363Hy5WDhBQhUALif_qXsSapqzMJEqVoDGalRagqCFK2_dITiozFk_Ucx3IxHoiTU\" />Nội thất Solati Limousine</p>\r\n	</li>\r\n</ul>\r\n\r\n<p>-&nbsp;<strong>C&aacute;c đơn vị độ xe limousine 10 chỗ,12 chỗ uy t&iacute;n</strong>&nbsp;bao gồm</p>\r\n\r\n<p><img alt=\"Nội thất Dasan Skybus\" src=\"https://lh4.googleusercontent.com/uRymLwRutgT1tg9aeBeOqf_EEwfeBzJ7E78ojPZlg_EJPMhoyemQIDJCv0l6iUFnH37wGGp_gD218CYk0gvEglzUfmscWAD3vfWdHPauHZBBZHUBiO9Z3DoC2isUGuaLQzKFKGqm\" />Nội thất Dasan Skybus</p>\r\n\r\n<ul>\r\n	<li>Dcar Limousine, Dasan Skybus l&agrave; 2 đơn vị độ xe uy t&iacute;n được lựa chọn h&agrave;ng đầu bởi c&aacute;c đơn vị vận tải chuy&ecirc;n chạy hợp đồng v&agrave; tuyến cố định bởi tốc độ giao xe, gi&aacute; cả tốt, sản xuất được số lượng nhiều,...</li>\r\n	<li>Autokingdom, iCar,... thường được lựa chọn bởi c&aacute;c ca sỹ, giới si&ecirc;u gi&agrave;u v&igrave; khả năng tinh chỉnh theo &yacute; ri&ecirc;ng, tuy nhi&ecirc;n gi&aacute; thường cao</li>\r\n	<li>C&aacute;c d&ograve;ng limousine ch&iacute;nh của Dcar: Transit Dcar Limousine hạng thương gia, Transit Dcar President, Dcar cung điện di động, Dcar Solati Thượng Đỉnh, Solati Dcar hạng thương gia 12 chỗ, &hellip;.</li>\r\n	<li>C&aacute;c d&ograve;ng limousine ch&iacute;nh của Dasan: SKYBUS Solati Limousine, SKYBUS Solati Bold, SKYBUS Solati Pro, SKYBUS Solati Money, SKYBUS Solati Special, Sky Bus Gold, &hellip;.</li>\r\n</ul>\r\n\r\n<h3>B. Limousine ghế ngồi 16,18 chỗ</h3>\r\n\r\n<p>Tuyến đường ph&ugrave; hợp cho d&ograve;ng xe xe limousine ghế ngồi 16 chỗ, 18 chỗ l&agrave; tầm 150km-400km v&agrave; thời gian di chuyển 2.5h-5h. D&ograve;ng xe n&agrave;y ph&ugrave; hợp nhất cho c&aacute;c tuyến đường c&oacute; cự ly trung b&igrave;nh v&agrave; du lịch vd như S&agrave;i g&ograve;n - Mũi n&eacute;, H&agrave; nội - Lạng Sơn,...</p>\r\n\r\n<p>-&nbsp;<strong>Sơ đồ ghế xe limousine&nbsp;</strong>thường chia l&agrave;m 6 h&agrave;ng, mỗi h&agrave;ng c&oacute; 3 ghế. H&agrave;nh kh&aacute;ch thường chọn d&ograve;ng xe n&agrave;y v&igrave; xe lớn c&oacute; độ an to&agrave;n cao, ngồi &ecirc;m hơn v&agrave; tho&aacute;ng hơn so với d&ograve;ng xe limousine nhỏ. Chủ xe thường chọn đầu tư d&ograve;ng xe n&agrave;y để thay c&aacute;c d&ograve;ng ghế ngồi 10, 12 chỗ v&igrave; số lượng kh&aacute;ch đi c&oacute; thể nhiều gấp đ&ocirc;i trong khi chi ph&iacute; cố định như xăng, t&agrave;i xế vẫn kh&ocirc;ng kh&aacute;c nhiều.</p>\r\n\r\n<p>-&nbsp;<strong>Gi&aacute; v&eacute; trung b&igrave;nh d&ograve;ng xe limousine 16-19&nbsp;</strong>thường để kh&aacute;ch h&agrave;ng dễ d&agrave;ng chấp nhận nhất v&agrave; tỉ lệ lấp đầy xe cao nhất l&agrave; tăng 60%-100% so với d&ograve;ng xe thường.</p>\r\n\r\n<p>-&nbsp;<strong>D&ograve;ng xe limousine n&agrave;y thường được độ tr&ecirc;n nền&nbsp;</strong>xe Samco với Samco Felix, Thaco Town với xe&hellip;, Độ lại từ d&ograve;ng xe 45 chỗ của Universe, hoặc Thaco Town hoặc xe nhập từ H&agrave;n quốc ti&ecirc;u biểu c&oacute; xe Nguyễn Kim Limousine từ S&agrave;i G&ograve;n đi Đ&agrave; lạt</p>\r\n\r\n<p><strong>C&aacute;c đơn vị độ xe limousine 16-18 chỗ uy t&iacute;n</strong>&nbsp;bao gồm</p>\r\n\r\n<p><img alt=\"Dasan Skybus\" src=\"https://lh5.googleusercontent.com/NLkWTC1OwktZ8a3TI4QFWlsp1FhDdMkNO7PKwJwYIruXXjrtjP-7CHz0o9PPm3OyW8fk2aqDFZRD1d7ua-9wnVvH2tmrnM_DargKX-3lt8Cc8MggrcItFInytLPhBglpK9LUoM1b\" />Dasan Skybus</p>\r\n\r\n<p><img alt=\"Dcar Limousine 16 chỗ\" src=\"https://lh6.googleusercontent.com/ndGxmOXU84Z1i1W1xaEcDdUqUFB3m0AYDIc7Ztnru6iri2T0VgEs5S9g-TP9AP_ifcO4guMKw-JJueZrvMdNh6zlbeN9gZHLH_w3PPhcXAMJnggHZYafgOzyqRKsWNTIBidrWkqv\" />Dcar Limousine 16 chỗ</p>\r\n\r\n<p><img alt=\"Samco Limousine 17 chỗ\" src=\"https://lh3.googleusercontent.com/lVSg3qHOES5pDV1dV5obNzOWwa_lebEtUk4t7t_N7jU_CQeYefWiFlHJLKEbZkwMVTt9mWMCbUbZeVm9R4fa00iry8IZEXSkdriQiiKMm8CDYgn0cmxJq-BCsr3SKRaG7Z41DsM8\" />Samco Limousine 17 chỗ</p>\r\n\r\n<ul>\r\n	<li>Dasan Skybus</li>\r\n	<li>Dcar</li>\r\n	<li>Samco</li>\r\n</ul>\r\n\r\n<h3>C. Limousine giường nằm cabin 22 chỗ</h3>\r\n\r\n<p>Tuyến đường ph&ugrave; hợp cho d&ograve;ng xe xe limousine 22 giường l&agrave; tầm 200km-600km v&agrave; thời gian di chuyển 5h-12h. D&ograve;ng xe n&agrave;y ph&ugrave; hợp nhất cho c&aacute;c tuyến đường c&oacute; cự ly d&agrave;i v&agrave; du lịch vd như S&agrave;i g&ograve;n - Nha Trang, H&agrave; nội - Sapa. Tuy nhi&ecirc;n những tuyến đường như S&agrave;i g&ograve;n - Bu&ocirc;n ma thuột, H&agrave; nội - Vinh,... lại được c&aacute;c h&atilde;ng xe ti&ecirc;u biểu c&oacute; Tiến Oanh chịu đầu tư nhất</p>\r\n\r\n<p>-&nbsp;<strong>Sơ đồ ghế xe limousine&nbsp;</strong>thường chia l&agrave;m 6 h&agrave;ng, mỗi h&agrave;ng c&oacute; 2 tầng, mỗi tầng c&oacute; 2 cabin. Tuy c&oacute; 22 cabins nhưng thực chất chỉ c&oacute; 20 cabins sử dụng được, 2 cabins cuối thường rất ngắn n&ecirc;n được d&agrave;nh ri&ecirc;ng cho t&agrave;i xế hoặc phụ xe nằm nghỉ. Cabin giường nằm c&oacute; chiều d&agrave;i&hellip;, chiều rộng&hellip;. Mỗi cabin c&oacute; r&egrave;m che cửa,... Một số đơn vị như Sao Việt lại c&oacute; h&agrave;ng b&ecirc;n tr&aacute;i&hellip; l&agrave; cabin đ&ocirc;i cho 2 người..., b&ecirc;n phải l&agrave; cabin đơn. H&agrave;nh kh&aacute;ch thường chọn d&ograve;ng xe n&agrave;y l&agrave; những người dư dả về mặt t&agrave;i ch&iacute;nh, tương ứng với ph&acirc;n kh&uacute;c kh&aacute;ch của kh&aacute;ch sạn 4-5 sao. V&igrave; vầy thường chỉ 5-10% lượng kh&aacute;ch ở tuyến đường sẵn s&agrave;ng trả mức gi&aacute; n&agrave;y để đi. Chủ xe thường chọn đầu tư d&ograve;ng xe 22 ph&ograve;ng nằm cabin chỉ 2 chiếc trong c&aacute;c xe của họ để tạo tiếng vang thương hiệu ốt.</p>\r\n\r\n<p>-&nbsp;<strong>Gi&aacute; v&eacute; trung b&igrave;nh d&ograve;ng xe limousine 16-19&nbsp;</strong>thường để kh&aacute;ch h&agrave;ng dễ d&agrave;ng chấp nhận nhất v&agrave; tỉ lệ lấp đầy xe cao nhất l&agrave; tăng 60%-80% so với d&ograve;ng xe thường. Gi&aacute; v&eacute; xe thường cũng khoảng 200 ng&agrave;n n&ecirc;n việc tăng 60%-80% th&igrave; gi&aacute; cũng đội l&ecirc;n hơn 100 ng&agrave;n n&ecirc;n r&agrave;o cảo để kh&aacute;ch h&agrave;ng sẵn s&agrave;ng bỏ tiền cũng kh&ocirc;ng nhiều</p>\r\n\r\n<p>-&nbsp;<strong>D&ograve;ng xe limousine n&agrave;y thường được độ tr&ecirc;n nền&nbsp;</strong>xe Thaco, Tracomeco, Haeco Huế,..</p>\r\n\r\n<p>-&nbsp;<strong>C&aacute;c đơn vị độ xe limousine 16-18 chỗ uy t&iacute;n&nbsp;</strong>bao gồm</p>\r\n\r\n<p><img alt=\"Thaco cabin limousine\" src=\"https://lh6.googleusercontent.com/JygF0wcN5oAMXC3PHx0oB27xl9IOhSKaXv4KsfcDB_fs-YuSgLTRChjWjrbUWquaU-khlBaRauP2bKJXaNRldLPih1mAjeNocKD-VAfQQmDO6eiiVSemyk5L61B1UnnHFlDASrKI\" />Thaco cabin limousine</p>\r\n\r\n<ul>\r\n	<li>Thaco limousine 22 giường</li>\r\n	<li>Cung điện di động Dcar 22 giường thường độ tr&ecirc;n nền xe Huế Haeco m&aacute;y Hino, Tracomeco m&aacute;y Weichai</li>\r\n</ul>\r\n\r\n<h3>D. Limousine VIP 33 giường</h3>\r\n\r\n<p>Tuyến đường ph&ugrave; hợp cho d&ograve;ng xe limousine 33 giường l&agrave; tầm 200km-600km v&agrave; thời gian di chuyển 5h-12h. D&ograve;ng xe n&agrave;y ph&ugrave; hợp nhất cho c&aacute;c tuyến đường c&oacute; cự ly d&agrave;i</p>\r\n\r\n<p>-&nbsp;<strong>Sơ đồ ghế xe limousine&nbsp;</strong>thường chia l&agrave;m 6 h&agrave;ng, mỗi h&agrave;ng c&oacute; 2 tầng, mỗi tầng c&oacute; 3 d&atilde;y. Xe limousine giường nằm c&oacute; chiều d&agrave;i v&agrave; chiều rộng tương ứng với xe giường nằm th&ocirc;ng thường 36 chỗ. Tuy nhi&ecirc;n xe n&agrave;y c&oacute; trang bị Tivi, r&egrave;m che,...v&agrave; giường bọc da &ecirc;m hơn... H&agrave;nh kh&aacute;ch thường chọn d&ograve;ng xe n&agrave;y l&agrave; những người t&agrave;i ch&iacute;nh trung b&igrave;nh, tương ứng với ph&acirc;n kh&uacute;c kh&aacute;ch của kh&aacute;ch sạn 3 sao. Nếu xem kh&aacute;ch đi d&ograve;ng thường tương ứng nh&agrave; nghỉ 2 sao th&igrave; đ&acirc;y ch&iacute;nh l&agrave; d&ograve;ng xe thay cho ph&acirc;n kh&uacute;c xe thường. Hiện tại để tăng cường sự cạnh tranh th&igrave; nhiều h&atilde;ng xe cũng l&ecirc;n kế hoạch thay dần c&aacute;c d&ograve;ng xe cũ với d&ograve;ng xe n&agrave;y. Về mặt l&acirc;u d&agrave;i th&igrave; d&ograve;ng xe n&agrave;y sẽ trở th&agrave;nh d&ograve;ng xe phổ th&ocirc;ng ở những tuyến đường d&agrave;i.</p>\r\n\r\n<p>-&nbsp;<strong>Gi&aacute; v&eacute; trung b&igrave;nh d&ograve;ng xe limousine 16-19&nbsp;</strong>thường để kh&aacute;ch h&agrave;ng dễ d&agrave;ng chấp nhận nhất v&agrave; tỉ lệ lấp đầy xe cao nhất l&agrave; tăng 20%-30% so với d&ograve;ng xe thường.</p>\r\n\r\n<p>-&nbsp;<strong>D&ograve;ng xe limousine n&agrave;y thường được độ tr&ecirc;n nền&nbsp;</strong>xe Thaco, Tracomeco, Haeco Huế,..</p>\r\n\r\n<p>-&nbsp;<strong>C&aacute;c đơn vị độ xe limousine 16-18 chỗ uy t&iacute;n&nbsp;</strong>bao gồm</p>\r\n\r\n<p><img alt=\"Thaco limousine Vip 33 giường\" src=\"https://lh6.googleusercontent.com/FyQrtftcEu1uGlDWf9zpmQxgwBupDCVk4ENpa2W4-8xHAFjPLs6bMl7eGNVGrdwl--3hvUiok9dCehs1gppyBLvh2IibFRCVolvkceEb1RorCq8ZcdDmSIh5aC5AyEKwR0aQAN3f\" />Thaco limousine Vip 33 giường</p>\r\n\r\n<p><img alt=\"Khách sạn di động Dcar 22 giường\" src=\"https://lh6.googleusercontent.com/4uZ1pWSF_l1rHVawu4qiomw5OWCsZCfhMAan4V_yUDHnMnxi_H04kOnh_pPS35QhZSaRxbQpbYKcisKCASXMU4iMeCH87S39zcZFxmZSzAdpi4gbj_8krJuOpR9XAKUsNJTTNls1\" />Kh&aacute;ch sạn di động Dcar 22 giường</p>\r\n\r\n<ul>\r\n	<li>Thaco limousine 33 giường</li>\r\n	<li>Kh&aacute;ch sạn di động Dcar 22 giường thường độ tr&ecirc;n nền xe Huế Haeco m&aacute;y Hino, Tracomeco m&aacute;y Weichai</li>\r\n</ul>', 1, 1, 0, '2021-07-24 08:37:44', '2021-11-18 13:32:58');
INSERT INTO `news` (`id`, `tieude`, `slugnews`, `image`, `mota`, `noidung`, `nguoidang`, `nguoisua`, `active`, `created_at`, `updated_at`) VALUES
(2, 'Thông tin xe khách mùa dịch: Xe khách có ngưng hoạt động không?', 'thong-tin-xe-khach-mua-dich-xe-khach-co-ngung-hoat-dong-khong', '1637242389.jfif', NULL, '<h2>H&agrave; Nội y&ecirc;u cầu người d&acirc;n xuất tr&igrave;nh giấy đi đường</h2>\r\n\r\n<p>Theo thống k&ecirc; của Sở y tế, đến ng&agrave;y 9/8/2021, H&agrave; Nội c&oacute; 70 ca mắc mới. Trong đ&oacute; gồm 21 ca trong cộng đồng v&agrave; 49 ca tại khu c&aacute;ch ly. Kể từ ng&agrave;y 10/8/2021, Th&agrave;nh phố H&agrave; Nội th&ocirc;ng b&aacute;o người d&acirc;n đi đường cần xuất tr&igrave;nh giấy tờ t&ugrave;y th&acirc;n (chứng minh nh&acirc;n d&acirc;n, căn cước c&ocirc;ng d&acirc;n, hộ chiếu) k&egrave;m theo giấy đi đường. Ph&oacute; Chủ tịch UBND TP cho biết, việc siết chặt quản l&yacute; giấy đi đường l&agrave; để kiểm tra, kh&ocirc;ng phải để phạt. Việc n&agrave;y gi&uacute;p ph&aacute;t hiện v&agrave; xử l&yacute; c&aacute;c cơ quan, doanh nghiệp chưa thực hiện nghi&ecirc;m chỉ đạo về bố tr&iacute; lịch l&agrave;m việc, sản xuất, kinh doanh của th&agrave;nh phố.</p>\r\n\r\n<p>Sau 2 tuần &aacute;p dụng chỉ thị 16, H&agrave; Nội tiếp tục gi&atilde;n c&aacute;ch x&atilde; hội to&agrave;n th&agrave;nh phố từ ng&agrave;y 6/8 đến 23/8. Theo &ocirc;ng Đinh Tiến Dũng &ndash; B&iacute; thư Th&agrave;nh ủy H&agrave; Nội cho biết, gi&atilde;n c&aacute;ch x&atilde; hội l&agrave; biện ph&aacute;p tốt nhất hiện nay. Gi&uacute;p th&agrave;nh phố kịp thời kiểm so&aacute;t được dịch. Quyết định n&agrave;y cũng được nhiều người d&acirc;n đồng t&igrave;nh v&agrave; đa số chấp h&agrave;nh tốt c&aacute;ch biện ph&aacute;p ph&ograve;ng, chống dịch.</p>\r\n\r\n<p><img alt=\"Hà Nội tiếp tục thực hiện giãn cách theo Chỉ thị 16 đến hết 23/8/2021\" src=\"https://storage.googleapis.com/blogvxr-uploads/2021/07/HNGianCach-01-1-1627109698-779x1080.jpg\" style=\"height:832px; width:600px\" /></p>\r\n\r\n<h2><strong>Xe kh&aacute;ch m&ugrave;a dịch c&oacute; ngưng hoạt động hay kh&ocirc;ng?</strong></h2>\r\n\r\n<p>Đến ng&agrave;y 11/8/2021, nước ta ghi nhận 228,939 ca mắc COVID-19 do l&acirc;y nhiễm trong nước. Trước t&igrave;nh h&igrave;nh dịch bệnh diễn biến phức tạp, nhiều h&agrave;nh kh&aacute;ch vẫn thắc mắc xe kh&aacute;ch m&ugrave;a dịch c&oacute; ngưng chạy hay kh&ocirc;ng?</p>\r\n\r\n<p>Đến thời điểm hiện tại, vẫn chưa c&oacute; c&ocirc;ng văn ch&iacute;nh thức của Thủ tướng Ch&iacute;nh phủ về việc cấm xe kh&aacute;ch to&agrave;n quốc lưu th&ocirc;ng. Tuy nhi&ecirc;n, tại nhiều tỉnh, th&agrave;nh tr&ecirc;n cả nước, hoạt động vận tải h&agrave;nh kh&aacute;ch tr&ecirc;n nhiều tuyến đường đang tạm ngưng hoạt động nhằm giảm thiểu tối đa nguy cơ l&acirc;y nhiễm Covid trong cộng đồng.</p>\r\n\r\n<h2>Danh s&aacute;ch c&aacute;c h&atilde;ng xe kh&aacute;ch ngưng hoạt động v&agrave; ch&iacute;nh s&aacute;ch hỗ trợ hủy v&eacute; do ảnh hưởng của COVID-19: Cập nhật ng&agrave;y 11/8/2021</h2>\r\n\r\n<p>Trong trường hợp bạn c&oacute; nhu cầu ho&agrave;n/hủy v&eacute; do ảnh hưởng của dịch, vui l&ograve;ng li&ecirc;n hệ tổng đ&agrave;i 1900 888843 &ndash; 1900 969681 hoặc gửi email đến địa chỉ&nbsp;lienhe@vexere.com&nbsp;để được hỗ trợ. VeXeRe sẽ cố gắng hỗ trợ bạn với ch&iacute;nh s&aacute;ch ho&agrave;n/hủy v&eacute; tốt nhất t&ugrave;y theo từng nh&agrave; xe.</p>\r\n\r\n<h3>C&aacute;c tuyến đường miền Bắc</h3>\r\n\r\n<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" dir=\"ltr\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<p><strong>Tuyến đường tạm ngưng hoạt động</strong></p>\r\n			</td>\r\n			<td><strong>Nh&agrave; xe</strong></td>\r\n			<td><strong>Thời gian ngưng hoạt động (dự kiến)</strong></td>\r\n			<td><strong>Ch&iacute;nh s&aacute;ch hủy v&eacute;</strong></td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bắc Ninh &lt;&gt; Lai Ch&acirc;u</td>\r\n			<td>Ph&uacute;c An</td>\r\n			<td>Từ 27/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bắc Ninh &lt;&gt; Điện Bi&ecirc;n</td>\r\n			<td>Đức Quyến</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bắc Kạn &lt;&gt; B&igrave;nh Phước</td>\r\n			<td>Lu&acirc;n Hu&ecirc;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"7\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Huế</p>\r\n			</td>\r\n			<td>Huetourist</td>\r\n			<td>Th&aacute;ng 10/2020</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Đức Limousine</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hương Giang Limousine</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đồng H&agrave;nh Limousine</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hội An Express</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Camel Travel</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nhật Tuấn</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Đ&ocirc;ng H&agrave;</td>\r\n			<td>PH Limousine</td>\r\n			<td>Từ 4/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; M&oacute;ng C&aacute;i</td>\r\n			<td>Việt Sơn Anh</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Quảng B&igrave;nh</td>\r\n			<td>Hạnh Luyến</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Quảng Ng&atilde;i</td>\r\n			<td>&Aacute;nh Minh Limousine</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Điện Bi&ecirc;n &lt;&gt; L&agrave;o Cai</td>\r\n			<td>Đ&ocirc;ng Đức</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Điện Bi&ecirc;n &lt;&gt; Quảng Ninh</td>\r\n			<td>Đức Việt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Đ&ocirc;ng &lt;&gt; Điện Bi&ecirc;n</td>\r\n			<td>Dũng Ng&agrave;</td>\r\n			<td>Từ 9/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Giang &lt;&gt; Quảng Ninh</td>\r\n			<td>Cường Lan</td>\r\n			<td>Từ 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Giang &lt;&gt; Sapa</td>\r\n			<td>Cường Thịnh</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Giang &lt;&gt; Tuy&ecirc;n Quang</td>\r\n			<td>Đạo Lan</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"2\">\r\n			<p>H&agrave; Nội &lt;&gt; Hạ Long</p>\r\n			</td>\r\n			<td>Xu&acirc;n Trường (Quảng Ninh)</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Aloha</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n			<p>H&agrave; Nội &lt;&gt; Hạ Long &lt;&gt; Cẩm Phả</p>\r\n			</td>\r\n			<td>Luxury Trans Vietnam</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Hưng Y&ecirc;n</td>\r\n			<td>Xu&acirc;n Quỳnh</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"6\">\r\n			<p>H&agrave; Nội &lt;&gt; Sơn La</p>\r\n			</td>\r\n			<td>Thủy Khởi</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ngọc Thuận</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mạnh Cường</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>HTX 30/4 (Hải Qu&acirc;n &ndash; Trưởng Tuấn)</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sơn La Express (Lộc An &ndash; Vinh Anh)</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>To&agrave;n Điệp</td>\r\n			<td>Từ 25/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Mai Ch&acirc;u</td>\r\n			<td>Thu Bằng</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"5\">\r\n			<p>H&agrave; Nội &lt;&gt; Lai Ch&acirc;u</p>\r\n			</td>\r\n			<td>Ho&agrave;ng Anh &ndash; Lai Ch&acirc;u</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Thủy (Lai Ch&acirc;u)</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Thủy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Thủy 89</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Việt Anh</td>\r\n			<td>Từ 27/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"11\">\r\n			<p>H&agrave; Nội &lt;&gt; H&agrave; Giang</p>\r\n			</td>\r\n			<td>Express H&agrave; Giang</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đăng Quang</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cầu M&egrave;</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bằng Phấn</td>\r\n			<td>Từ 2/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quang Đạo</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hải Thủy</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>To&aacute;n Oanh</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>C&ocirc;ng Phương VIP</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ngọc Cường</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quang Nghị</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh T&acirc;y &ndash; Vĩnh Thiện</td>\r\n			<td>Từ 29/6 đến 30/8/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"8\">\r\n			<p>H&agrave; Nội &lt;&gt; Cao Bằng</p>\r\n			</td>\r\n			<td>Bốn Hai (Cao Bằng)</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cao Bằng Express</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Long &ndash; Cao Bằng</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận An Travel</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thanh Ly</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vĩnh Dung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Ho&agrave;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hiệp Giang</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"4\">\r\n			<p>H&agrave; Nội &lt;&gt; C&aacute;t B&agrave;</p>\r\n			</td>\r\n			<td>Daiichi Travel</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>C&aacute;t B&agrave; Discovery</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>C&aacute;t B&agrave; Express</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Good morning C&aacute;t B&agrave;</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"19\">\r\n			<p>H&agrave; Nội &lt;&gt; Sapa</p>\r\n			</td>\r\n			<td>Dream Transport</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Golden Limousine</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Greenlion Bus</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Luxury Van</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Minh Travel</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sao Việt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Li&ecirc;n Dương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sao V&agrave;ng (Th&aacute;i B&igrave;nh)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Eco Sapa</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sapa VIP</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hava Sapa</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Yến Express</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&Eacute;n V&agrave;ng Travel</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>HMG Limousine</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>King Express</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Limousine Trường Thanh</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Daily Limousine</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>Như ng&agrave;y thường</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Green Bus</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nam Thắng Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Th&aacute;i Nguy&ecirc;n</td>\r\n			<td>Thanh T&ugrave;ng (Th&aacute;i Nguy&ecirc;n)</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"3\">\r\n			<p>H&agrave; Nội &lt;&gt; Tam Đảo</p>\r\n			</td>\r\n			<td>Tuấn Anh Limousine (Tam Đảo)</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nhật Nam Limousine</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Green Limousine</td>\r\n			<td>Từ 7/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; C&ocirc; T&ocirc;</td>\r\n			<td>SANI Express</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"2\">\r\n			<p>H&agrave; Nội &lt;&gt; Th&aacute;i B&igrave;nh</p>\r\n			</td>\r\n			<td>Tuấn Anh Limousine</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bus Star</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Hải Ph&ograve;ng</td>\r\n			<td>Trung Th&agrave;nh Limousine</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"3\">\r\n			<p>H&agrave; Nội &lt;&gt; Huế</p>\r\n			</td>\r\n			<td>KT Travel Huế</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thủy Ng&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&acirc;m Hương</td>\r\n			<td>Từ 8/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"2\">\r\n			<p>H&agrave; Nội &lt;&gt; H&agrave; Nam</p>\r\n			</td>\r\n			<td>Cường Ph&aacute;t Limousine</td>\r\n			<td>Từ 17/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thời Đại 4.0 Limousine</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Bắc Giang</td>\r\n			<td>Bảo Khang Limousine</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Bắc Kạn</td>\r\n			<td>An B&igrave;nh (Ba Bể)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"13\">\r\n			<p>H&agrave; Nội &lt;&gt; Mộc Ch&acirc;u</p>\r\n			</td>\r\n			<td>Cường Nguyệt</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Hương</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thanh Thắng (Sơn La)</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hải Tuấn</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ka Linh</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mộc Ch&acirc;u Travel</td>\r\n			<td>Từ 8/5 đến 31/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mộc Ch&acirc;u Limousine</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Xu&acirc;n Tr&aacute;ng Limousine</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nhật An Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Li&ecirc;n Thanh</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&agrave;nh Chung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ka Linh</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gia Hưng Limousine</td>\r\n			<td>Từ 10/5 đến 30/6/2021</td>\r\n			<td>Chưa c&oacute; th&ocirc;ng tin</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"9\">\r\n			<p>H&agrave; Nội &lt;&gt; Quảng Ninh</p>\r\n			</td>\r\n			<td>Kumho Việt Thanh</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c Xuy&ecirc;n</td>\r\n			<td>Từ 16/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ka Long</td>\r\n			<td>Từ 16/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute; B&igrave;nh (Quảng Ninh)</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Ph&uacute; Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Trọng Limousine</td>\r\n			<td>Từ 13/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>M&oacute;ng C&aacute;i Limousine</td>\r\n			<td>Từ 21/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kết Đo&agrave;n H&ugrave;ng Đức</td>\r\n			<td>Từ 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quảng Ninh Travel</td>\r\n			<td>Đến 24/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Quảng Trị</td>\r\n			<td>D&ograve;ng Hiền</td>\r\n			<td>Từ 17/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"3\">\r\n			<p>H&agrave; Nội &lt;&gt; H&ograve;a B&igrave;nh</p>\r\n			</td>\r\n			<td>Mạnh Ki&ecirc;n Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Anh Dũng (Mai Ch&acirc;u)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh An</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"6\">\r\n			<p>H&agrave; Nội &lt;&gt; Thanh H&oacute;a</p>\r\n			</td>\r\n			<td>L&yacute; Thảo</td>\r\n			<td>Từ 26/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>BEEGROUP</td>\r\n			<td>Từ 17/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hi-end</td>\r\n			<td>Từ 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Ho&agrave;i</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&ugrave;ng Hoa &ndash; Thanh H&oacute;a</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mai Linh Willer</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Đắk N&ocirc;ng</td>\r\n			<td>Thi&ecirc;n Trung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Nghệ An</td>\r\n			<td>Hải B&igrave;nh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"3\">\r\n			<p>H&agrave; Nội &lt;&gt; Ph&uacute; Thọ</p>\r\n			</td>\r\n			<td>Oanh Khải Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Việt Phương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hanoi Limo</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Tuy&ecirc;n Quang</td>\r\n			<td>Qu&acirc;n Thiện</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; L&agrave;o Cai</td>\r\n			<td>Đức Hiệp Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"6\">\r\n			<p>H&agrave; Nội &lt;&gt; Đ&agrave; Nẵng</p>\r\n			</td>\r\n			<td>Kim Chi 265</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Kim Chi</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Dương Vũ</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kim Yến</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ngọc &Aacute;nh (Đ&agrave; Nẵng)</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>V&acirc;n Kh&ocirc;i</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"2\">\r\n			<p>H&agrave; Nội &lt;&gt; Nam Định</p>\r\n			</td>\r\n			<td>Ph&uacute;c Lộc Thọ Limousine</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>X.E Việt Nam</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; S&agrave;i G&ograve;n</td>\r\n			<td>Phượng Ho&agrave;ng</td>\r\n			<td>Từ 20/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Sơn La</td>\r\n			<td>Kh&aacute;nh Thịnh</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"2\">\r\n			<p>H&agrave; Nội &lt;&gt; Lạng Sơn</p>\r\n			</td>\r\n			<td>Quỳnh Thanh VIP Limo</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ninh Quỳnh Car VIP</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Nội &lt;&gt; Kỳ Anh</td>\r\n			<td>Giang Anh (H&agrave; Tĩnh)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"6\">\r\n			<p>H&agrave; Nội &lt;&gt; Điện Bi&ecirc;n</p>\r\n			</td>\r\n			<td>Tiến Tuế</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>L&ecirc; Dũng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Xu&acirc;n Long</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hưng Trang</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quang Tuấn</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bảo C&uacute;c</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"4\">\r\n			<p>H&agrave; Nội &lt;&gt; Ninh B&igrave;nh</p>\r\n			</td>\r\n			<td>Thi&ecirc;n Trường (Vĩnh Y&ecirc;n)</td>\r\n			<td>Từ 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tr&agrave;ng An Limousine</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ninh B&igrave;nh Excurrsion Transport</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh An Limousine</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td rowspan=\"5\">\r\n			<p>H&agrave; Nội &lt;&gt; Quảng B&igrave;nh</p>\r\n			</td>\r\n			<td>Anh Việt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hưng Long</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kh&aacute;nh Hồng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận Hiền</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hải Ph&ograve;ng &lt;&gt; Quảng Ninh</td>\r\n			<td>Tuấn Kiệt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nghệ An &lt;&gt; Bắc Giang</td>\r\n			<td>C&uacute;c Mừng</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nghệ An &lt;&gt; Lạng Sơn</td>\r\n			<td>C&uacute;c Mừng</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nghệ An &lt;&gt; Ph&uacute; Thọ</td>\r\n			<td>Đức Thịnh Ph&aacute;t</td>\r\n			<td>Từ 10/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quảng Ninh &lt;&gt; Th&aacute;i B&igrave;nh</td>\r\n			<td>Duy Kh&aacute;nh Limousine</td>\r\n			<td>Từ 30/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quảng Ninh &lt;&gt; Ninh B&igrave;nh</td>\r\n			<td>Ninh B&igrave;nh Limousine</td>\r\n			<td>Từ 5/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quảng Ninh &lt;&gt; Nam Định</td>\r\n			<td>Đức Lộc Limousine</td>\r\n			<td>Từ 19/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&aacute;i Nguy&ecirc;n &lt;&gt; Hải Ph&ograve;ng</td>\r\n			<td>Hải Nguy&ecirc;n</td>\r\n			<td>Từ 26/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&aacute;i Nguy&ecirc;n &lt;&gt; L&agrave;o Cai</td>\r\n			<td>Thanh Huyền</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<h3>C&aacute;c tuyến đường miền Nam</h3>\r\n\r\n<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" dir=\"ltr\">\r\n	<tbody>\r\n		<tr>\r\n			<td><strong>Tuyến đường tạm ngưng hoạt động</strong></td>\r\n			<td><strong>Nh&agrave; xe</strong></td>\r\n			<td><strong>Thời gian ngưng hoạt động (dự kiến)</strong></td>\r\n			<td><strong>Ch&iacute;nh s&aacute;ch hủy v&eacute;</strong></td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; C&agrave; Mau</td>\r\n			<td>L&ecirc; H&ugrave;ng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Quảng Ng&atilde;i</td>\r\n			<td>Thanh Thủy &ndash; Quảng Ng&atilde;i</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Đ&agrave; Lạt</td>\r\n			<td>Đ&agrave; Lạt ơi</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Vũng T&agrave;u</td>\r\n			<td>Auto Kingdom</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Tr&agrave; Vinh</td>\r\n			<td>T&acirc;n Phước T&agrave;i</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Hậu Giang</td>\r\n			<td>&Uacute;t V&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Ki&ecirc;n Giang</td>\r\n			<td>Gia Huệ</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>B&igrave;nh Dương &lt;&gt; Đ&agrave; Lạt</p>\r\n			</td>\r\n			<td>TNT</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thanh B&igrave;nh Xanh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Dương &lt;&gt; Kh&aacute;nh H&ograve;a</td>\r\n			<td>H&agrave; Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Phước &lt;&gt; Quảng Ng&atilde;i</td>\r\n			<td>Ba T&iacute;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bến Tre &lt;&gt; Đ&agrave; Lạt</td>\r\n			<td>Thuận Hưng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bến Tre &lt;&gt; Kh&aacute;nh H&ograve;a</td>\r\n			<td>H&agrave; Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"6\">\r\n			<p>Bu&ocirc;n M&ecirc; Thuột &lt;&gt; Đ&agrave; Nẵng</p>\r\n			</td>\r\n			<td>Mai Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cao Nguy&ecirc;n (Bu&ocirc;n M&ecirc; Thuột)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quốc Đạt</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hải V&acirc;n (Bu&ocirc;n M&ecirc; Thuột)</td>\r\n			<td>Từ 19/7/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&aacute;i Sơn</td>\r\n			<td>Từ 19/7/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mai Vy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"3\">\r\n			<p>Bu&ocirc;n M&ecirc; Thuột &lt;&gt; Nha Trang</p>\r\n			</td>\r\n			<td>Thịnh Ph&aacute;t &ndash; Tuấn Anh</td>\r\n			<td>Từ 21/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hương Khu&ecirc;</td>\r\n			<td>Từ 5/7/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Rạng Đ&ocirc;ng</td>\r\n			<td>Từ 6/7/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bu&ocirc;n M&ecirc; Thuột &lt;&gt; Quy Nhơn</td>\r\n			<td>Qu&yacute; Trung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cần Thơ &lt;&gt; Ki&ecirc;n Giang</td>\r\n			<td>Qu&acirc;n Bưu</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cần Thơ &lt;&gt; Kh&aacute;nh H&ograve;a</td>\r\n			<td>H&agrave; Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>C&agrave; Mau &lt;&gt; Đ&agrave; Lạt</td>\r\n			<td>Phước Th&agrave;nh &ndash; Thanh Tuấn</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Lạt &lt;&gt; Vũng T&agrave;u</td>\r\n			<td>Vy V&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Lạt &lt;&gt; Phan Thiết</p>\r\n			</td>\r\n			<td>Thanh Lịch</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>An Ph&uacute; Travel</td>\r\n			<td>Từ 25/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Lạt &lt;&gt; Tuy H&ograve;a</td>\r\n			<td>Nam &Aacute; Ch&acirc;u</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Lạt &lt;&gt; Phan Rang</td>\r\n			<td>Thu Thảo</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Lạt &lt;&gt; Ninh Thuận</td>\r\n			<td>Quỳnh Như (Phan Rang)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Lạt &lt;&gt; Cam Ranh</td>\r\n			<td>Phước Tiến Limousine</td>\r\n			<td>Từ 2/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Nha Trang</p>\r\n			</td>\r\n			<td>Quang Hạnh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Li&ecirc;n Hưng</td>\r\n			<td>Từ 6/7/2021</td>\r\n			<td>Chưa hỗ trợ hủy v&eacute;, chỉ hỗ trợ bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Gia Lai</p>\r\n			</td>\r\n			<td>Đức Đạt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận Tiến</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Đắk Lắk</p>\r\n			</td>\r\n			<td>Qu&yacute; Thảo (Đ&agrave; Nẵng)</td>\r\n			<td>Từ 11/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c Hải</td>\r\n			<td>Từ 24/7/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Kr&ocirc;ng B&ocirc;ng</td>\r\n			<td>Kim Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Kr&ocirc;ng Pắk</td>\r\n			<td>Kim Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Đ&agrave; Lạt</td>\r\n			<td>Thanh Thủy &ndash; Đ&agrave; Lạt</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Kon Tum</p>\r\n			</td>\r\n			<td>Minh Quốc</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Việt T&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Huế</td>\r\n			<td>HAV Limousine</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Nghệ An</td>\r\n			<td>C&uacute;c Mừng</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Quảng B&igrave;nh</p>\r\n			</td>\r\n			<td>Nam H&agrave;</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>L&acirc;m Huề</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Quảng Trị</td>\r\n			<td>T&acirc;n Quang Dũng Limousine</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Quảng Ng&atilde;i</p>\r\n			</td>\r\n			<td>T&aacute;nh Hạnh</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>A Vương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Cam Ranh</td>\r\n			<td>Quang Hạnh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đ&agrave; Nẵng &lt;&gt; Nha Trang</td>\r\n			<td>C&uacute;c T&ugrave;ng (Đ&agrave; Nẵng)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; B&igrave;nh Thuận</p>\r\n			</td>\r\n			<td>Dương Hồng</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Dương Hồng</td>\r\n			<td>Từ 15/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"3\">\r\n			<p>Đ&agrave; Nẵng &lt;&gt; Thanh H&oacute;a</p>\r\n			</td>\r\n			<td>T&uacute; Tạc</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Việt Sơn Anh</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vạn Lục T&ugrave;ng</td>\r\n			<td>Từ 15/5 đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đồng Nai &lt;&gt; Vĩnh Long</td>\r\n			<td>Kế Nghi</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đồng Nai &lt;&gt; Ki&ecirc;n Giang</td>\r\n			<td>Minh Qu&acirc;n (Đồng Nai)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đồng Nai &lt;&gt; B&igrave;nh Phước</td>\r\n			<td>Sơn Tuyền</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gia Lai &lt;&gt; Thanh H&oacute;a</td>\r\n			<td>An Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gia Lai &lt;&gt; B&igrave;nh Thuận</td>\r\n			<td>B&igrave;nh Thuận</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Huế &lt;&gt; Kr&ocirc;ng Năng</td>\r\n			<td>Tuấn Lợi</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Huế &lt;&gt; Nha Trang</td>\r\n			<td>Li&ecirc;n Hưng</td>\r\n			<td>Từ 6/7/2021</td>\r\n			<td>Chưa hỗ trợ hủy v&eacute;, chỉ hỗ trợ bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Huế &lt;&gt; Gia Lai</td>\r\n			<td>Thuận Tiến</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Huế &lt;&gt; Kon Tum</td>\r\n			<td>Minh Quốc</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kon Tum &lt;&gt; Vĩnh Ph&uacute;c</td>\r\n			<td>Phượng Thu</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nha Trang &lt;&gt; Kon Tum</td>\r\n			<td>Anh Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nha Trang &lt;&gt; L&acirc;m Đồng</td>\r\n			<td>Ba Tấn</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nha Trang &lt;&gt; Quy Nhơn</td>\r\n			<td>Hải Sơn</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"9\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Gia Lai</p>\r\n			</td>\r\n			<td>Thuận &Yacute;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gia Ph&uacute;c (Gia Lai)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Thủy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận Tiến</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>K&iacute;nh Di&ecirc;n Hồng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>L&ecirc; Cương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&aacute;u Bản</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bảy Lang</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vương Tấn Dũng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"15\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đ&agrave; Lạt</p>\r\n			</td>\r\n			<td>Xe Nh&agrave;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kumho Samco</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Phong Ph&uacute;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Long V&acirc;n Limousine</td>\r\n			<td>Từ 19/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>3S Limo</td>\r\n			<td>Từ 17/5 đến 31/5/2021</td>\r\n			<td>Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền. Nếu kh&aacute;ch h&agrave;ng c&oacute; c&ocirc;ng văn c&aacute;ch ly sẽ được bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Tuấn Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Philip Travel</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đan Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mỹ Hiền (Đ&agrave; Lạt)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Trọng Minh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nguyễn Kim Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Chỉ hỗ trợ bảo lưu, chưa hỗ trợ hủy v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Minh Thư</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cảnh Hoa</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Lạc Hồng Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Anh Quốc (L&acirc;m Đồng)</td>\r\n			<td>Từ 19/7/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"8\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Vũng T&agrave;u</p>\r\n			</td>\r\n			<td>Huy Ho&agrave;ng (Vũng T&agrave;u)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thi&ecirc;n Ph&uacute;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hoa Mai</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vie Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Nh&agrave; xe chưa hỗ trợ hủy, chỉ hỗ trợ bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&aacute;t Lộc An</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&agrave;nh Vinh (Vũng T&agrave;u)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>AVIGO</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Anh Quốc Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"13\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Nha Trang</p>\r\n			</td>\r\n			<td>Phương Nam</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Việt Nhật</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c An Express</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hạnh Cafe</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quang Hạnh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mạnh M&ugrave;i</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mười Phượng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tr&agrave; Lan Vi&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Minh Tải</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Khanh Phong</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Li&ecirc;n Hưng</td>\r\n			<td>Từ 6/7/2021</td>\r\n			<td>Chưa hỗ trợ hủy v&eacute;, chỉ hỗ trợ bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>The Sinh Tourist</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>&ndash;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Cần Thơ</td>\r\n			<td>Lộc Ph&aacute;t Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; T&acirc;y Ninh</p>\r\n			</td>\r\n			<td>Saco Travel</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>L&ecirc; Kh&aacute;nh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền, nếu c&oacute; c&ocirc;ng văn c&aacute;ch ly sẽ được bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; T&acirc;n Ch&acirc;u</p>\r\n			</td>\r\n			<td>Hiệp Th&agrave;nh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thi&ecirc;n Thi&ecirc;n Hương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"4\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Kon Tum</p>\r\n			</td>\r\n			<td>Việt T&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Phượng Thu</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nhật T&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Minh Quốc</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"17\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đắk Lắk</p>\r\n			</td>\r\n			<td>Phương Hồng Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nguy&ecirc;n Dịu</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Long V&acirc;n Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Loan S&aacute;ng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Minh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Khang Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Dung Nghĩa</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đồng T&acirc;m</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tiến Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận Hiếu</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Trang H&ograve;a</td>\r\n			<td>Từ 31/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hải Lu&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kim Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thảo Lan</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mai Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tiến Oanh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Qu&yacute; Thảo (Đắk Lắk)</td>\r\n			<td>Từ 31/5/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đắk Mil</p>\r\n			</td>\r\n			<td>Thư Kỳ</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c Lộc</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đắk N&ocirc;ng</p>\r\n			</td>\r\n			<td>Cường Ny</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quỳnh Anh (Đắk N&ocirc;ng)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"3\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Huế</p>\r\n			</td>\r\n			<td>T&acirc;m Minh Phương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Cẩm V&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Ngọc Trinh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đ&agrave; Nẵng</p>\r\n			</td>\r\n			<td>T&acirc;m Minh Phương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mạnh Đ&igrave;nh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"4\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Phan Rang</p>\r\n			</td>\r\n			<td>Ho&agrave;ng Anh (Phan Rang)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thiện Tr&iacute;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>An Anh Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ho&agrave;ng Nh&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"8\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; B&igrave;nh Thuận</p>\r\n			</td>\r\n			<td>Tr&uacute;c L&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Quốc Ngọc</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>BEACH BUS</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sơn L&acirc;m (Phan Thiết)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tấn T&agrave;i &ndash; B&igrave;nh Thuận</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Minh Nghĩa</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Bảo Tr&acirc;m</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thủy H&agrave; Linh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"4\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Ninh Thuận</p>\r\n			</td>\r\n			<td>Tuấn T&uacute; &ndash; Phương Uy&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đăng Nh&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Trọng Thắng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Ho&agrave;ng Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"9\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Tr&agrave; Vinh</p>\r\n			</td>\r\n			<td>Kim Ho&agrave;ng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Thanh Thủy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ngọc &Aacute;nh (S&agrave;i G&ograve;n)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gi&aacute;p Diệp</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>V&acirc;n Thuận</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thảo Vy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mỹ Loan (C&agrave; Mau)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thắng</td>\r\n			<td>Từ 1/6 đến 15/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vũ Linh Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"5\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Bạc Li&ecirc;u</p>\r\n			</td>\r\n			<td>Tr&iacute; Nh&acirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nguy&ecirc;n Vũ</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&agrave; My</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Trọng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Anh Tuấn (Bạc Li&ecirc;u)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"13\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Ph&uacute; Y&ecirc;n</p>\r\n			</td>\r\n			<td>Ph&uacute;c Y&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c Thuận Thảo</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hồng Sơn (Ph&uacute; Y&ecirc;n)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Long V&acirc;n &ndash; Ph&uacute; Y&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Sao Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>C&uacute;c Tư</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Năm R&ugrave;m</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Th&agrave;nh Ban</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ph&uacute;c Đức</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&ugrave;ng Tiến &ndash; Tuy H&ograve;a</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Linh &Yacute; Ch&iacute;</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nam Ti&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>B&igrave;nh Phương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"4\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Mũi N&eacute;</p>\r\n			</td>\r\n			<td>3S Limo</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nam &Aacute; Ch&acirc;u</td>\r\n			<td>Đến 30/6/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>G5Car</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>ADT Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"4\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Bảo Lộc</p>\r\n			</td>\r\n			<td>Nhật Đoan Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Gi&aacute;p Diệp (Bảo Lộc)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Blao Tour</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Trung Ly Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"3\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Bến Tre</p>\r\n			</td>\r\n			<td>Thảo Ch&acirc;u</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&ugrave;ng Tiến (Bến Tre)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Kim Anh (Bến Tre)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"5\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Tiền Giang</p>\r\n			</td>\r\n			<td>Hải Duy&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đại Ng&acirc;n</td>\r\n			<td>Từ 30/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tuấn Lan</td>\r\n			<td>Từ 30/5/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Minh T&acirc;m</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Nam Tiến Buslines</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Đam R&ocirc;ng</td>\r\n			<td>Anh Chương (L&acirc;m Đồng)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Di Linh</td>\r\n			<td>Dương Huỳnh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Đồng Nai</p>\r\n			</td>\r\n			<td>An Phước</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Ba Xuy&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Long An</td>\r\n			<td>Thảo Nhung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Kr&ocirc;ng Năng</td>\r\n			<td>Tuấn Lợi</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Phan Thiết</td>\r\n			<td>Trung Nga</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; H&agrave; Ti&ecirc;n</p>\r\n			</td>\r\n			<td>Ho&agrave;ng Minh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Huệ Nghĩa</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Cam Ranh</p>\r\n			</td>\r\n			<td>Gia Ph&uacute;c &ndash; Cam Ranh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>H&ograve;a Thuận Anh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"6\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; B&igrave;nh Định</p>\r\n			</td>\r\n			<td>Long Nguyễn</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>An Ph&uacute; Buslines</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Lộc Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hoa Nho</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&acirc;n Dũng Tiến</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Dũng Lệ</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; B&igrave;nh Dương</td>\r\n			<td>Thiện Dương</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Ki&ecirc;n Giang</p>\r\n			</td>\r\n			<td>Thiện Th&agrave;nh Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Tuyết Nhung</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Hải Ph&ograve;ng</td>\r\n			<td>Th&agrave;nh Nh&acirc;n &ndash; Hải Ph&ograve;ng</td>\r\n			<td>Từ 20/6/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; C&agrave; Mau</td>\r\n			<td>Thắng</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; B&igrave;nh Phước</p>\r\n			</td>\r\n			<td>Mỹ Hằng (B&igrave;nh Phước)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>T&uacute; Nhi</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Cần Giờ</td>\r\n			<td>Th&agrave;nh Ph&uacute;c Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Nghệ An</td>\r\n			<td>Lộc Thủy</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Tuy H&ograve;a</td>\r\n			<td>Li&ecirc;n Hưng</td>\r\n			<td>Từ 6/7/2021</td>\r\n			<td>Chưa hỗ trợ hủy v&eacute;, chỉ hỗ trợ bảo lưu v&eacute;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; S&oacute;c Trăng</td>\r\n			<td>Mỹ Duy&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"2\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; An Giang</p>\r\n			</td>\r\n			<td>Huệ Nghĩa</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Đức Ph&aacute;t</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; H&agrave; Tĩnh</td>\r\n			<td>Mạnh Đ&igrave;nh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Bi&ecirc;n H&ograve;a</td>\r\n			<td>Trường Thịnh Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; L&acirc;m Đồng</td>\r\n			<td>Như Vinh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>S&agrave;i G&ograve;n &lt;&gt; Đồng Th&aacute;p</td>\r\n			<td>Mạnh Quỳnh</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>Như ng&agrave;y thường. Nếu c&oacute; c&ocirc;ng văn ngưng chạy th&igrave; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan=\"1\" rowspan=\"6\">\r\n			<p>S&agrave;i G&ograve;n &lt;&gt; Quảng Ng&atilde;i</p>\r\n			</td>\r\n			<td>Chơn Mỹ Limousine</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Rạng Đ&ocirc;ng Buslines</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Thuận T&acirc;m</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Mai Li&ecirc;n</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Lượng Triều</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Hưng Thịnh (Quảng Ng&atilde;i)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n		<tr>\r\n			<td>Vũng T&agrave;u &lt;&gt; Bi&ecirc;n H&ograve;a</td>\r\n			<td>Ngọc Ph&aacute;t (Đồng Nai)</td>\r\n			<td>Đến 31/12/2021</td>\r\n			<td>C&oacute; hỗ trợ hủy v&eacute; ho&agrave;n tiền</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<h2>&nbsp;</h2>\r\n\r\n<div class=\"ddict_btn\" style=\"left:1471px; top:1045px\"><img src=\"chrome-extension://bpggmmljdiliancllaapiggllnkbjocb/logo/16.png\" /></div>', 1, 1, 0, '2021-08-12 15:54:46', '2021-11-18 13:33:09');
INSERT INTO `news` (`id`, `tieude`, `slugnews`, `image`, `mota`, `noidung`, `nguoidang`, `nguoisua`, `active`, `created_at`, `updated_at`) VALUES
(3, 'Nhiều tỉnh phía Nam dừng xe khách đến TP HCM', 'nhieu-tinh-phia-nam-dung-xe-khach-den-tp-hcm', '1637242396.jfif', NULL, '<p>Nhiều tỉnh l&acirc;n cận dừng xe kh&aacute;ch đến TP HCM để ngăn Covid-19 x&acirc;m nhập sau khi th&agrave;nh phố lớn n&agrave;y xuất hiện hai ổ dịch, tổng cộng 90 ca nhiễm trong ba ng&agrave;y qua.</p>\r\n\r\n<p><strong>Long An,&nbsp;</strong>sau khi&nbsp;<a href=\"https://vnexpress.net/them-mot-dau-bep-khach-san-sheraton-mac-covid-19-4285127.html\" rel=\"dofollow\">đầu bếp nam</a>, 45 tuổi, qu&ecirc; huyện Cần Giuộc, bị l&acirc;y bệnh từ đồng nghiệp tại kh&aacute;ch sạn 5 sao Sheraton ở TP HCM, tỉnh ph&aacute;t hiện&nbsp;<a href=\"https://vnexpress.net/long-an-them-ca-nghi-covid-19-4285924.html\" rel=\"dofollow\">th&ecirc;m ca nghi nhiễm</a>&nbsp;ở TP T&acirc;n An. Đ&oacute; l&agrave; người đ&agrave;n &ocirc;ng 51 tuổi, ở TP T&acirc;n An, từng tiếp x&uacute;c với một người ở quận 12, TP HCM.</p>\r\n\r\n<p>Trước việc c&aacute;c ca nhiễm li&ecirc;n quan TP HCM, UBND tỉnh cho ngưng hoạt động c&aacute;c tuyến vận tải h&agrave;nh kh&aacute;ch theo h&igrave;nh thức xe tuyến cố định v&agrave; xe bu&yacute;t đi v&agrave; đến địa b&agrave;n. Tất cả chuyến xe hợp đồng chở kh&ocirc;ng qu&aacute; 50% sức chứa, kh&ocirc;ng qu&aacute; 20 người một chuyến (ngoại trừ hoạt động xe đưa rước c&ocirc;ng nh&acirc;n v&agrave; nh&acirc;n vi&ecirc;n).</p>\r\n\r\n<p>H&agrave;nh kh&aacute;ch buộc phải mang khẩu trang; ngồi xen kẽ h&agrave;ng ghế v&agrave; bắt buộc phải khai b&aacute;o y tế theo quy định; tr&ecirc;n xe phải c&oacute; trang bị dung dịch khử khuẩn phục vụ h&agrave;nh kh&aacute;ch, thực hiện khử khuẩn sau mỗi chuyến vận chuyển; thực hiện lập v&agrave; lưu trữ danh s&aacute;ch h&agrave;nh kh&aacute;ch tr&ecirc;n từng chuyến đi.</p>\r\n\r\n<p>Gi&aacute;p ranh với tỉnh n&agrave;y, Sở Giao th&ocirc;ng Vận&nbsp;<strong>Tiền Giang</strong>&nbsp;đ&atilde; dừng hoạt động vận tải h&agrave;nh kh&aacute;ch đến Long An v&agrave; TP HCM.</p>\r\n\r\n<p>Nh&acirc;n vi&ecirc;n y tế kiểm dịch ở cửa ng&otilde; tr&ecirc;n quốc lộ 20 từ TP HCM về Đ&agrave; Lạt đầu năm 2021. Ảnh:&nbsp;<em>Kh&aacute;nh Ph&uacute;c</em></p>\r\n\r\n<p>Kể từ 0h ng&agrave;y 30/5, UBND&nbsp;<strong>L&acirc;m Đồng</strong>&nbsp;dừng to&agrave;n bộ c&aacute;c loại xe kh&aacute;ch từ TP HCM v&agrave;o tỉnh n&agrave;y cho đến khi c&oacute; th&ocirc;ng b&aacute;o mới. Sở Giao th&ocirc;ng Vận tải được giao phối hợp lực lượng chức năng, địa phương li&ecirc;n quan kiểm tra, kiểm so&aacute;t v&agrave; xử l&yacute; nghi&ecirc;m c&aacute;c tổ chức, c&aacute; nh&acirc;n vi phạm.</p>\r\n\r\n<p>Từ s&aacute;ng nay, tỉnh n&agrave;y đ&atilde; k&iacute;ch hoạt 5 chốt kiểm so&aacute;t dịch, chủ yếu từ hướng quốc lộ, tỉnh lộ từ Đồng Nai, B&igrave;nh Thuận v&agrave;o L&acirc;m Đồng. Ngo&agrave;i ra, c&aacute;c chốt mới được lập ở huyện C&aacute;t Ti&ecirc;n, Bảo L&acirc;m, huyện Di Linh, huyện Đơn Dương, huyện Lạc Dương, Đam R&ocirc;ng.</p>\r\n\r\n<p><strong>B&igrave;nh Thuận</strong>&nbsp;y&ecirc;u c&aacute;c xe kh&aacute;ch tuyến cố định, xe hợp đồng, xe du lịch đi v&agrave; đến TP HCM v&agrave; c&aacute;c tỉnh xuất hiện dịch phải dừng chạy từ h&ocirc;m nay đến hết ng&agrave;y 4/6.</p>\r\n\r\n<p>&quot;T&ugrave;y theo diễn biến dịch bệnh, Sở Giao th&ocirc;ng Vận tải c&oacute; tr&aacute;ch nhiệm tham mưu UBND tỉnh quyết định thời gian hoạt động trở lại&quot;, Chủ tịch UBND tỉnh L&ecirc; Tuấn Phong cho biết. C&ugrave;ng với đ&oacute; địa phương sẽ k&iacute;ch hoạt lại tổ kiểm tra y tế tại c&aacute;c bến xe, bến cảng, bến t&agrave;u; chỉ đạo c&aacute;c lực lượng chức năng kiểm tra, quản l&yacute; chặt chẽ xe trả kh&aacute;ch dọc quốc lộ. Tuyến Phan Thiết - Ph&uacute; Qu&yacute; sẽ kh&ocirc;ng chở kh&aacute;ch từ c&aacute;c tỉnh, th&agrave;nh c&oacute; dịch ra đảo.</p>\r\n\r\n<p>Dịch vụ ăn uống, giải kh&aacute;t phải giảm 50% c&ocirc;ng suất b&aacute;n tại chỗ, khuyến kh&iacute;ch b&aacute;n mang đi, sắp xếp lại b&agrave;n ghế gi&atilde;n c&aacute;ch, b&agrave;n c&aacute;ch b&agrave;n tối thiểu 2 m. C&aacute;c hoạt động nghi lễ t&ocirc;n gi&aacute;o tập trung tr&ecirc;n 10 người cũng được y&ecirc;u cầu dừng. T&ograve;a gi&aacute;m mục Phan Thiết đ&atilde; th&ocirc;ng b&aacute;o đến tất cả nh&agrave; thờ tr&ecirc;n to&agrave;n tỉnh kh&ocirc;ng tổ chức c&aacute;c th&aacute;nh lễ đ&ocirc;ng người.</p>\r\n\r\n<p>C&aacute;ch TP HCM gần 100 km,&nbsp;<strong>B&agrave; Rịa - Vũng T&agrave;u&nbsp;</strong>thu h&uacute;t đ&ocirc;ng du kh&aacute;ch vui chơi, tắm biển mỗi dịp cuối tuần. Kh&aacute;c với h&igrave;nh ảnh đ&ocirc;ng nghịt ng&agrave;y đầu kỳ nghỉ lễ 30/4, gần một th&aacute;ng qua c&aacute;c b&atilde;i biển vắng hoe v&igrave; người d&acirc;n e d&egrave; đi du lịch khi đợt dịch b&ugrave;ng l&ecirc;n ở c&aacute;c tỉnh ph&iacute;a Bắc.</p>\r\n\r\n<p><img alt=\"Nhân viên y tế  khử khuẩn xe tải từ ngoại tỉnh vào Bà Rịa - Vũng Tàu trên quốc lộ 51, sáng 29/5. Ảnh: Trường Hà.\" src=\"https://i1-vnexpress.vnecdn.net/2021/05/29/khu-khuan-7996-1622263000.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=13IXHewcCmFDaCXlREvF4w\" /></p>\r\n\r\n<p>Nh&acirc;n vi&ecirc;n y tế khử khuẩn xe tải từ ngoại tỉnh v&agrave;o B&agrave; Rịa - Vũng T&agrave;u tr&ecirc;n quốc lộ 51, s&aacute;ng 29/5. Ảnh:&nbsp;<em>Trường H&agrave;.</em></p>\r\n\r\n<p>Chưa ghi nhận ca nhiễm ngo&agrave;i cộng đồng, song trước việc TP HCM ph&aacute;t hiện hai ổ dịch,&nbsp;<a href=\"https://vnexpress.net/them-22-ca-nghi-mac-covid-19-lien-quan-hoi-truyen-giao-4285771.html\" rel=\"dofollow\">tổng cộng 90 ca nhiễm</a>, trong đ&oacute;, chuỗi l&acirc;y nhiễm Hội th&aacute;nh Truyền gi&aacute;o Phục Hưng l&agrave; chuỗi lớn nhất với 85 ca bệnh, tỉnh B&agrave; Rịa &ndash; Vũng T&agrave;u tiếp tục siết chặt ph&ograve;ng dịch, sau khi dừng dịch vụ kh&ocirc;ng thiết yếu từ hồi đầu th&aacute;ng. Từ h&ocirc;m nay, xe dịch vụ, hợp đồng, bu&yacute;t, taxi... chở kh&aacute;ch kh&ocirc;ng qu&aacute; 50% số ghế v&agrave; dưới 20 người.</p>\r\n\r\n<p>Dịch vụ ăn uống tại chỗ, thức ăn đường phố, nh&agrave; h&agrave;ng (kể cả nh&agrave; h&agrave;ng trong kh&aacute;ch sạn) kh&ocirc;ng phục vụ qu&aacute; 20 người c&ugrave;ng l&uacute;c. C&aacute;c hoạt động chăm s&oacute;c sức khỏe, spa, x&ocirc;ng hơi; s&acirc;n khấu ca nhạc, rạp chiếu phim, karaoke...; sinh hoạt t&ocirc;n gi&aacute;o, t&iacute;n ngưỡng phải dừng. C&aacute;c cơ quan tổ chức mỗi cuộc họp kh&ocirc;ng qu&aacute; 30 người...</p>\r\n\r\n<p>L&agrave; tỉnh gi&aacute;p TP HCM qua huyện Củ Chi, UBND&nbsp;<strong>T&acirc;y Ninh</strong>&nbsp;h&ocirc;m nay y&ecirc;u cầu Sở Giao th&ocirc;ng Vận tải phối hợp Sở Y tế v&agrave; C&ocirc;ng an tỉnh lập c&aacute;c chốt chặn cửa ng&otilde; v&agrave;o từ hướng S&agrave;i G&ograve;n để ph&ograve;ng Covid-19. C&aacute;c hoạt động thể thao ngo&agrave;i trời, c&aacute;c nghi lễ t&ocirc;n gi&aacute;o tr&ecirc;n 20 người... kh&ocirc;ng được ph&eacute;p tổ chức. Khu du lịch Khu du lịch n&uacute;i B&agrave; Đen ngưng đ&oacute;n kh&aacute;ch.</p>\r\n\r\n<p>Tối 28/5, T&acirc;y Ninh ph&aacute;t hiện&nbsp;<a href=\"https://vnexpress.net/be-trai-hai-tuoi-o-tay-ninh-mac-covid-19-4285792.html\" rel=\"dofollow\">b&eacute; trai 2 tuổi&nbsp;</a>dương t&iacute;nh nCoV, l&agrave; F1 của người mẹ l&agrave;m việc tại TP HCM. Trung t&acirc;m kiểm so&aacute;t Bệnh tật tỉnh đ&atilde; truy vết 11 trường hợp F1, đưa đi c&aacute;ch ly. Cơ quan chức năng đ&atilde; phong tỏa khu vực 32 hộ d&acirc;n ở ấp Bến K&eacute;o, x&atilde; Long Th&agrave;nh Nam, thị x&atilde; Ho&agrave; Th&agrave;nh - nơi c&oacute; nh&agrave; của bệnh nh&acirc;n.</p>\r\n\r\n<p><img alt=\"Nhân viên y tế tiến hành lấy mẫu xét nghiệm tại thị xã Hòa Thành đêm 28/5. Ảnh: Baotayninh\" src=\"https://i1-vnexpress.vnecdn.net/2021/05/29/Lay-mau-6394-1622263000.jpg?w=680&amp;h=0&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=THEUy6x85ycw6ZSnccYHjw\" /></p>\r\n\r\n<p>Nh&acirc;n vi&ecirc;n y tế tiến h&agrave;nh lấy mẫu x&eacute;t nghiệm tại thị x&atilde; H&ograve;a Th&agrave;nh đ&ecirc;m 28/5. Ảnh:<em>&nbsp;Baotayninh</em></p>\r\n\r\n<p><strong>B&igrave;nh Dương&nbsp;</strong>sau khi ghi nhận một người ở phường Đ&ocirc;ng H&ograve;a, TP Dĩ An, dương t&iacute;nh nCoV (l&agrave; F1, li&ecirc;n quan ổ dịch ở TP HCM, đ&atilde; được c&aacute;ch ly v&agrave; điều trị tại TP HCM), tỉnh cũng siết chặt kiểm tra c&aacute;c tuyến xe kh&aacute;ch đến c&aacute;c tỉnh; y&ecirc;u cầu người d&acirc;n kh&ocirc;ng tổ chức, dừng sự kiện hoạt động tập trung đ&ocirc;ng người gồm: Lễ hội, tiệc cưới, c&aacute;c điểm tham quan, du lịch, chợ đ&ecirc;m, thể thao, hồ bơi, c&ocirc;ng vi&ecirc;n, thả diều....</p>\r\n\r\n<p>Tiệm masage, bar, ph&ograve;ng game, karaoke, spa, l&agrave;m đẹp, yoga, nh&agrave; h&agrave;ng tiệc cưới cũng tạm dừng. C&aacute;c qu&aacute;n c&agrave; ph&ecirc;, ăn uống kh&ocirc;ng tập trung qu&aacute; 10 người, giữ khoảng c&aacute;ch, &aacute;p dụng thực hiện b&aacute;n mang về.</p>\r\n\r\n<p>L&agrave; tỉnh c&oacute; nhiều người d&acirc;n di cư v&agrave;o TP HCM sinh sống, l&agrave;m việc, Chủ tịch UBND&nbsp;<strong>Quảng Ng&atilde;i&nbsp;</strong>Đặng Văn Minh y&ecirc;u cầu từ 30/5, những người từ S&agrave;i G&ograve;n đến Quảng Ng&atilde;i c&aacute;ch ly tại nh&agrave; 21 ng&agrave;y. Người d&acirc;n c&oacute; tiếp x&uacute;c với hoạt động Hội th&aacute;nh Truyền gi&aacute;o Phục hưng v&agrave; đi kh&aacute;m bệnh tại c&aacute;c bệnh viện đ&atilde; ghi nhận ca bệnh tại TP HCM về Quảng Ng&atilde;i trong 14 ng&agrave;y qua phải chủ dộng li&ecirc;n hệ với Trung t&acirc;m Kiểm so&aacute;t Bệnh tật tỉnh qua số điện thoại 0914021022 để hướng dẫn x&eacute;t nghiệm, thực hiện c&aacute;c biện ph&aacute;p y tế kịp thời.</p>\r\n\r\n<p>Tỉnh Quảng Ng&atilde;i đ&atilde; lập hai chốt y tế ở cửa ng&otilde; ph&iacute;a Nam tỉnh để kiểm so&aacute;t người về từ TP HCM v&agrave; c&aacute;c tỉnh ph&iacute;a Nam. Từ cuối th&aacute;ng 4 đến nay, tỉnh ghi nhận một ca Covid-19 trong cộng đồng, nam &quot;<a href=\"https://vnexpress.net/mot-thanh-nien-o-quang-ngai-nghi-mac-covid-19-4273431.html\" rel=\"dofollow\">bệnh nh&acirc;n 3.067&quot;</a>&nbsp;25 tuổi, ở x&atilde; Tịnh Kỳ, TP Quảng Ng&atilde;i từng đến bar New Phương Đ&ocirc;ng (TP Đ&agrave; Nẵng), nơi ghi nhận h&agrave;ng loạt ca nhiễm bệnh. Hiện nam thanh ni&ecirc;n đ&atilde; c&oacute; kết quả &acirc;m t&iacute;nh lần một với nCoV.</p>\r\n\r\n<p>L&atilde;nh đạo Quảng Ng&atilde;i đ&aacute;nh gi&aacute; nguy cơ dịch l&acirc;y trong cộng đồng rất lớn, n&ecirc;n ngo&agrave;i biện ph&aacute;p c&aacute;ch ly người từ c&aacute;c địa phương c&oacute; dịch, Quảng Ng&atilde;i y&ecirc;u cầu c&aacute;c doanh nghiệp v&agrave; Ban Quản l&yacute; c&aacute;c Khu c&ocirc;ng nghiệp tỉnh thực hiện c&aacute;c biện ph&aacute;p chống dịch ở Khu c&ocirc;ng nghiệp Tịnh Phong, VSIP Quảng Ng&atilde;i...</p>', 1, 1, 0, '2021-08-12 15:58:19', '2021-11-18 13:33:16'),
(4, 'Nhập thông tin test', 'nhap-thong-tin-test', '1637242401.jfif', NULL, '<p>Đ&acirc;y l&agrave; tin tức test</p>', 1, 1, 0, '2021-11-07 07:23:49', '2021-11-18 13:33:21'),
(10, 'Lịch trình tìm kiếm xe', 'lich-trinh-tim-kiem-xe', '1637242421.jpg', NULL, '<p>H&agrave; Nội -&gt; Ninh B&igrave;nh (Ng&agrave;y 27/11/2021)</p>\r\n\r\n<p>H&agrave; Nội -&gt; S&agrave;i G&ograve;n&nbsp;(Ng&agrave;y 27/11/2021)</p>\r\n\r\n<p>Quảng Ninh -&gt; Đ&agrave; Lạt&nbsp;(Ng&agrave;y 27/11/2021)</p>\r\n\r\n<p>&nbsp;</p>', 1, 1, 0, '2021-11-08 10:22:18', '2021-11-18 13:33:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `id` int(10) UNSIGNED NOT NULL,
  `tennv` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmnd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banglai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diachi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dienthoai` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`id`, `tennv`, `cmnd`, `banglai`, `ngaysinh`, `gioitinh`, `diachi`, `dienthoai`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn Tuấn Sáng', '001200008035', 'AGS8273823', '2000-07-24', '2', 'Hà Nội', '0973956805', '2021-07-24 09:59:29', '2021-07-24 09:59:29'),
(2, 'Trần Bắc Huyền', '0012000080354', 'AGS8273837', '1999-07-24', '1', 'Hà Nội', '0973956834', '2021-07-24 11:25:24', '2021-07-24 11:25:24'),
(3, 'Nguyễn Văn Dương', '00120000354', 'AGS82738373', '1995-07-24', '2', 'Hà Nội', '0973953834', '2021-07-24 11:26:08', '2021-07-24 11:26:08'),
(5, 'Hoàng Đức Phúc', '001200008034', 'AGS82738789', '1996-08-14', '1', 'Hà Nội', '0973956845', '2021-08-14 07:06:59', '2021-08-14 07:06:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `payments`
--

CREATE TABLE `payments` (
  `id` int(10) UNSIGNED NOT NULL,
  `p_dondatve_id` int(10) UNSIGNED DEFAULT NULL,
  `p_user_id` int(10) UNSIGNED DEFAULT NULL,
  `p_dondatve_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_money` double(15,2) DEFAULT NULL,
  `p_note` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_vnp_response_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_code_vnp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_code_bank` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_time` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `payments`
--

INSERT INTO `payments` (`id`, `p_dondatve_id`, `p_user_id`, `p_dondatve_code`, `p_money`, `p_note`, `p_vnp_response_code`, `p_code_vnp`, `p_code_bank`, `p_time`, `created_at`, `updated_at`) VALUES
(2, 2, 1, '20211125102459', 1500000.00, 'Noi dung thanh toan', '00', '13639667', 'NCB', '2021-11-25', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `key_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `display_name`, `parent_id`, `key_code`, `created_at`, `updated_at`) VALUES
(1, 'Dashboard', 'Dashboard', 0, NULL, '2021-07-24 08:33:43', '2021-07-24 08:33:43'),
(2, 'List', 'List', 1, 'Dashboard_List', '2021-07-24 08:33:43', '2021-07-24 08:33:43'),
(3, 'Add', 'Add', 1, 'Dashboard_Add', '2021-07-24 08:33:43', '2021-07-24 08:33:43'),
(4, 'Edit', 'Edit', 1, 'Dashboard_Edit', '2021-07-24 08:33:43', '2021-07-24 08:33:43'),
(5, 'Delete', 'Delete', 1, 'Dashboard_Delete', '2021-07-24 08:33:43', '2021-07-24 08:33:43'),
(6, 'Quantri', 'Quantri', 0, NULL, '2021-07-24 08:33:46', '2021-07-24 08:33:46'),
(7, 'List', 'List', 6, 'Quantri_List', '2021-07-24 08:33:46', '2021-07-24 08:33:46'),
(8, 'Add', 'Add', 6, 'Quantri_Add', '2021-07-24 08:33:46', '2021-07-24 08:33:46'),
(9, 'Edit', 'Edit', 6, 'Quantri_Edit', '2021-07-24 08:33:46', '2021-07-24 08:33:46'),
(10, 'Delete', 'Delete', 6, 'Quantri_Delete', '2021-07-24 08:33:46', '2021-07-24 08:33:46'),
(11, 'Thanhvien', 'Thanhvien', 0, NULL, '2021-07-24 08:33:49', '2021-07-24 08:33:49'),
(12, 'List', 'List', 11, 'Thanhvien_List', '2021-07-24 08:33:49', '2021-07-24 08:33:49'),
(13, 'Add', 'Add', 11, 'Thanhvien_Add', '2021-07-24 08:33:49', '2021-07-24 08:33:49'),
(14, 'Edit', 'Edit', 11, 'Thanhvien_Edit', '2021-07-24 08:33:49', '2021-07-24 08:33:49'),
(15, 'Delete', 'Delete', 11, 'Thanhvien_Delete', '2021-07-24 08:33:49', '2021-07-24 08:33:49'),
(16, 'Roles', 'Roles', 0, NULL, '2021-07-24 08:33:51', '2021-07-24 08:33:51'),
(17, 'List', 'List', 16, 'Roles_List', '2021-07-24 08:33:51', '2021-07-24 08:33:51'),
(18, 'Add', 'Add', 16, 'Roles_Add', '2021-07-24 08:33:51', '2021-07-24 08:33:51'),
(19, 'Edit', 'Edit', 16, 'Roles_Edit', '2021-07-24 08:33:51', '2021-07-24 08:33:51'),
(20, 'Delete', 'Delete', 16, 'Roles_Delete', '2021-07-24 08:33:52', '2021-07-24 08:33:52'),
(21, 'Permission', 'Permission', 0, NULL, '2021-07-24 08:33:54', '2021-07-24 08:33:54'),
(22, 'List', 'List', 21, 'Permission_List', '2021-07-24 08:33:55', '2021-07-24 08:33:55'),
(23, 'Add', 'Add', 21, 'Permission_Add', '2021-07-24 08:33:55', '2021-07-24 08:33:55'),
(24, 'Edit', 'Edit', 21, 'Permission_Edit', '2021-07-24 08:33:55', '2021-07-24 08:33:55'),
(25, 'Delete', 'Delete', 21, 'Permission_Delete', '2021-07-24 08:33:55', '2021-07-24 08:33:55'),
(26, 'Nhanvien', 'Nhanvien', 0, NULL, '2021-07-24 08:33:57', '2021-07-24 08:33:57'),
(27, 'List', 'List', 26, 'Nhanvien_List', '2021-07-24 08:33:57', '2021-07-24 08:33:57'),
(28, 'Add', 'Add', 26, 'Nhanvien_Add', '2021-07-24 08:33:57', '2021-07-24 08:33:57'),
(29, 'Edit', 'Edit', 26, 'Nhanvien_Edit', '2021-07-24 08:33:57', '2021-07-24 08:33:57'),
(30, 'Delete', 'Delete', 26, 'Nhanvien_Delete', '2021-07-24 08:33:57', '2021-07-24 08:33:57'),
(31, 'Tinhthanh', 'Tinhthanh', 0, NULL, '2021-07-24 08:33:59', '2021-07-24 08:33:59'),
(32, 'List', 'List', 31, 'Tinhthanh_List', '2021-07-24 08:33:59', '2021-07-24 08:33:59'),
(33, 'Add', 'Add', 31, 'Tinhthanh_Add', '2021-07-24 08:33:59', '2021-07-24 08:33:59'),
(34, 'Edit', 'Edit', 31, 'Tinhthanh_Edit', '2021-07-24 08:33:59', '2021-07-24 08:33:59'),
(35, 'Delete', 'Delete', 31, 'Tinhthanh_Delete', '2021-07-24 08:33:59', '2021-07-24 08:33:59'),
(36, 'Tuyenduong', 'Tuyenduong', 0, NULL, '2021-07-24 08:34:03', '2021-07-24 08:34:03'),
(37, 'List', 'List', 36, 'Tuyenduong_List', '2021-07-24 08:34:03', '2021-07-24 08:34:03'),
(38, 'Add', 'Add', 36, 'Tuyenduong_Add', '2021-07-24 08:34:03', '2021-07-24 08:34:03'),
(39, 'Edit', 'Edit', 36, 'Tuyenduong_Edit', '2021-07-24 08:34:03', '2021-07-24 08:34:03'),
(40, 'Delete', 'Delete', 36, 'Tuyenduong_Delete', '2021-07-24 08:34:03', '2021-07-24 08:34:03'),
(41, 'Diemdontra', 'Diemdontra', 0, NULL, '2021-07-24 08:34:06', '2021-07-24 08:34:06'),
(42, 'List', 'List', 41, 'Diemdontra_List', '2021-07-24 08:34:06', '2021-07-24 08:34:06'),
(43, 'Add', 'Add', 41, 'Diemdontra_Add', '2021-07-24 08:34:07', '2021-07-24 08:34:07'),
(44, 'Edit', 'Edit', 41, 'Diemdontra_Edit', '2021-07-24 08:34:07', '2021-07-24 08:34:07'),
(45, 'Delete', 'Delete', 41, 'Diemdontra_Delete', '2021-07-24 08:34:07', '2021-07-24 08:34:07'),
(46, 'Lotrinh', 'Lotrinh', 0, NULL, '2021-07-24 08:34:09', '2021-07-24 08:34:09'),
(47, 'List', 'List', 46, 'Lotrinh_List', '2021-07-24 08:34:09', '2021-07-24 08:34:09'),
(48, 'Add', 'Add', 46, 'Lotrinh_Add', '2021-07-24 08:34:09', '2021-07-24 08:34:09'),
(49, 'Edit', 'Edit', 46, 'Lotrinh_Edit', '2021-07-24 08:34:09', '2021-07-24 08:34:09'),
(50, 'Delete', 'Delete', 46, 'Lotrinh_Delete', '2021-07-24 08:34:09', '2021-07-24 08:34:09'),
(51, 'Loaixe', 'Loaixe', 0, NULL, '2021-07-24 08:34:11', '2021-07-24 08:34:11'),
(52, 'List', 'List', 51, 'Loaixe_List', '2021-07-24 08:34:12', '2021-07-24 08:34:12'),
(53, 'Add', 'Add', 51, 'Loaixe_Add', '2021-07-24 08:34:12', '2021-07-24 08:34:12'),
(54, 'Edit', 'Edit', 51, 'Loaixe_Edit', '2021-07-24 08:34:12', '2021-07-24 08:34:12'),
(55, 'Delete', 'Delete', 51, 'Loaixe_Delete', '2021-07-24 08:34:12', '2021-07-24 08:34:12'),
(56, 'Xe', 'Xe', 0, NULL, '2021-07-24 08:34:15', '2021-07-24 08:34:15'),
(57, 'List', 'List', 56, 'Xe_List', '2021-07-24 08:34:15', '2021-07-24 08:34:15'),
(58, 'Add', 'Add', 56, 'Xe_Add', '2021-07-24 08:34:15', '2021-07-24 08:34:15'),
(59, 'Edit', 'Edit', 56, 'Xe_Edit', '2021-07-24 08:34:15', '2021-07-24 08:34:15'),
(60, 'Delete', 'Delete', 56, 'Xe_Delete', '2021-07-24 08:34:15', '2021-07-24 08:34:15'),
(61, 'Chuyenxe', 'Chuyenxe', 0, NULL, '2021-07-24 08:34:19', '2021-07-24 08:34:19'),
(62, 'List', 'List', 61, 'Chuyenxe_List', '2021-07-24 08:34:19', '2021-07-24 08:34:19'),
(63, 'Add', 'Add', 61, 'Chuyenxe_Add', '2021-07-24 08:34:19', '2021-07-24 08:34:19'),
(64, 'Edit', 'Edit', 61, 'Chuyenxe_Edit', '2021-07-24 08:34:19', '2021-07-24 08:34:19'),
(65, 'Delete', 'Delete', 61, 'Chuyenxe_Delete', '2021-07-24 08:34:19', '2021-07-24 08:34:19'),
(66, 'Ve', 'Ve', 0, NULL, '2021-07-24 08:34:23', '2021-07-24 08:34:23'),
(67, 'List', 'List', 66, 'Ve_List', '2021-07-24 08:34:23', '2021-07-24 08:34:23'),
(68, 'Add', 'Add', 66, 'Ve_Add', '2021-07-24 08:34:23', '2021-07-24 08:34:23'),
(69, 'Edit', 'Edit', 66, 'Ve_Edit', '2021-07-24 08:34:23', '2021-07-24 08:34:23'),
(70, 'Delete', 'Delete', 66, 'Ve_Delete', '2021-07-24 08:34:23', '2021-07-24 08:34:23'),
(71, 'Dondatve', 'Dondatve', 0, NULL, '2021-07-24 08:34:30', '2021-07-24 08:34:30'),
(72, 'List', 'List', 71, 'Dondatve_List', '2021-07-24 08:34:30', '2021-07-24 08:34:30'),
(73, 'Add', 'Add', 71, 'Dondatve_Add', '2021-07-24 08:34:30', '2021-07-24 08:34:30'),
(74, 'Edit', 'Edit', 71, 'Dondatve_Edit', '2021-07-24 08:34:30', '2021-07-24 08:34:30'),
(75, 'Delete', 'Delete', 71, 'Dondatve_Delete', '2021-07-24 08:34:30', '2021-07-24 08:34:30'),
(76, 'Tintuc', 'Tintuc', 0, NULL, '2021-07-24 08:34:32', '2021-07-24 08:34:32'),
(77, 'List', 'List', 76, 'Tintuc_List', '2021-07-24 08:34:32', '2021-07-24 08:34:32'),
(78, 'Add', 'Add', 76, 'Tintuc_Add', '2021-07-24 08:34:32', '2021-07-24 08:34:32'),
(79, 'Edit', 'Edit', 76, 'Tintuc_Edit', '2021-07-24 08:34:33', '2021-07-24 08:34:33'),
(80, 'Delete', 'Delete', 76, 'Tintuc_Delete', '2021-07-24 08:34:33', '2021-07-24 08:34:33'),
(81, 'Slides', 'Slides', 0, NULL, '2021-07-24 08:34:37', '2021-07-24 08:34:37'),
(82, 'List', 'List', 81, 'Slides_List', '2021-07-24 08:34:37', '2021-07-24 08:34:37'),
(83, 'Add', 'Add', 81, 'Slides_Add', '2021-07-24 08:34:37', '2021-07-24 08:34:37'),
(84, 'Edit', 'Edit', 81, 'Slides_Edit', '2021-07-24 08:34:37', '2021-07-24 08:34:37'),
(85, 'Delete', 'Delete', 81, 'Slides_Delete', '2021-07-24 08:34:38', '2021-07-24 08:34:38');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `permission_role`
--

CREATE TABLE `permission_role` (
  `id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `permission_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `permission_role`
--

INSERT INTO `permission_role` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, NULL, NULL),
(2, 1, 3, NULL, NULL),
(3, 1, 4, NULL, NULL),
(4, 1, 5, NULL, NULL),
(5, 1, 7, NULL, NULL),
(6, 1, 8, NULL, NULL),
(7, 1, 9, NULL, NULL),
(8, 1, 10, NULL, NULL),
(9, 1, 12, NULL, NULL),
(10, 1, 13, NULL, NULL),
(11, 1, 14, NULL, NULL),
(12, 1, 15, NULL, NULL),
(13, 1, 17, NULL, NULL),
(14, 1, 18, NULL, NULL),
(15, 1, 19, NULL, NULL),
(16, 1, 20, NULL, NULL),
(17, 1, 22, NULL, NULL),
(18, 1, 23, NULL, NULL),
(19, 1, 24, NULL, NULL),
(20, 1, 25, NULL, NULL),
(21, 1, 27, NULL, NULL),
(22, 1, 28, NULL, NULL),
(23, 1, 29, NULL, NULL),
(24, 1, 30, NULL, NULL),
(25, 1, 32, NULL, NULL),
(26, 1, 33, NULL, NULL),
(27, 1, 34, NULL, NULL),
(28, 1, 35, NULL, NULL),
(29, 1, 37, NULL, NULL),
(30, 1, 38, NULL, NULL),
(31, 1, 39, NULL, NULL),
(32, 1, 40, NULL, NULL),
(33, 1, 42, NULL, NULL),
(34, 1, 43, NULL, NULL),
(35, 1, 44, NULL, NULL),
(36, 1, 45, NULL, NULL),
(37, 1, 47, NULL, NULL),
(38, 1, 48, NULL, NULL),
(39, 1, 49, NULL, NULL),
(40, 1, 50, NULL, NULL),
(41, 1, 52, NULL, NULL),
(42, 1, 53, NULL, NULL),
(43, 1, 54, NULL, NULL),
(44, 1, 55, NULL, NULL),
(45, 1, 57, NULL, NULL),
(46, 1, 58, NULL, NULL),
(47, 1, 59, NULL, NULL),
(48, 1, 60, NULL, NULL),
(49, 1, 62, NULL, NULL),
(50, 1, 63, NULL, NULL),
(51, 1, 64, NULL, NULL),
(52, 1, 65, NULL, NULL),
(53, 1, 67, NULL, NULL),
(54, 1, 68, NULL, NULL),
(55, 1, 69, NULL, NULL),
(56, 1, 70, NULL, NULL),
(57, 1, 72, NULL, NULL),
(58, 1, 73, NULL, NULL),
(59, 1, 74, NULL, NULL),
(60, 1, 75, NULL, NULL),
(61, 1, 77, NULL, NULL),
(62, 1, 78, NULL, NULL),
(63, 1, 79, NULL, NULL),
(64, 1, 80, NULL, NULL),
(65, 1, 82, NULL, NULL),
(66, 1, 83, NULL, NULL),
(67, 1, 84, NULL, NULL),
(68, 1, 85, NULL, NULL),
(69, 2, 37, NULL, NULL),
(70, 2, 38, NULL, NULL),
(71, 2, 39, NULL, NULL),
(72, 2, 40, NULL, NULL),
(73, 2, 42, NULL, NULL),
(74, 2, 43, NULL, NULL),
(75, 2, 44, NULL, NULL),
(76, 2, 45, NULL, NULL),
(77, 2, 47, NULL, NULL),
(78, 2, 48, NULL, NULL),
(79, 2, 49, NULL, NULL),
(80, 2, 50, NULL, NULL),
(81, 2, 52, NULL, NULL),
(82, 2, 53, NULL, NULL),
(83, 2, 54, NULL, NULL),
(84, 2, 55, NULL, NULL),
(85, 2, 57, NULL, NULL),
(86, 2, 58, NULL, NULL),
(87, 2, 59, NULL, NULL),
(88, 2, 60, NULL, NULL),
(89, 2, 62, NULL, NULL),
(90, 2, 63, NULL, NULL),
(91, 2, 64, NULL, NULL),
(92, 2, 65, NULL, NULL),
(93, 3, 2, NULL, NULL),
(94, 3, 3, NULL, NULL),
(95, 3, 4, NULL, NULL),
(96, 3, 5, NULL, NULL),
(97, 3, 7, NULL, NULL),
(98, 3, 8, NULL, NULL),
(99, 3, 9, NULL, NULL),
(100, 3, 10, NULL, NULL),
(101, 3, 12, NULL, NULL),
(102, 3, 13, NULL, NULL),
(103, 3, 14, NULL, NULL),
(104, 3, 15, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', '2021-07-24 08:35:24', '2021-07-24 08:35:24'),
(2, 'Nhà xe X', 'Thêm xe, chuyến xe...', '2021-08-14 07:35:45', '2021-08-14 07:35:45'),
(3, 'test', 'test', '2021-11-24 06:56:03', '2021-11-24 06:56:03');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `slides`
--

CREATE TABLE `slides` (
  `id` int(10) UNSIGNED NOT NULL,
  `slide` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tuyenduong`
--

CREATE TABLE `tuyenduong` (
  `id` int(10) UNSIGNED NOT NULL,
  `diemdi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diemden` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tuyenduong`
--

INSERT INTO `tuyenduong` (`id`, `diemdi`, `diemden`, `created_at`, `updated_at`) VALUES
(1, 'Bắc Giang', 'Quảng Ninh', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(2, 'Hà Nội', 'Ninh Bình', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(3, 'Hà Nội', 'Đà Nẵng', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(4, 'Hà Nội', 'Sài Gòn', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(5, 'Hà Nội', 'Sa Pa', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(6, 'Hà Nội', 'Vùng Tàu', '2021-07-24 09:17:57', '2021-07-24 09:17:57'),
(7, 'Hà Nội', 'Đà Lạt', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(8, 'Hà Nội', 'Nha Trang', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(9, 'Hà Nội', 'Phan Thiết', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(10, 'Quảng Ninh', 'Hà Nội', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(11, 'Quảng Ninh', 'Ninh Bình', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(12, 'Quảng Ninh', 'Đà Nẵng', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(13, 'Quảng Ninh', 'Sài Gòn', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(14, 'Quảng Ninh', 'Sa Pa', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(15, 'Quảng Ninh', 'Vùng Tàu', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(16, 'Quảng Ninh', 'Đà Lạt', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(17, 'Quảng Ninh', 'Nha Trang', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(18, 'Quảng Ninh', 'Phan Thiết', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(19, 'Ninh Bình', 'Hà Nội', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(20, 'Ninh Bình', 'Quảng Ninh', '2021-07-24 09:17:58', '2021-07-24 09:17:58'),
(21, 'Ninh Bình', 'Đà Nẵng', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(22, 'Ninh Bình', 'Sài Gòn', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(23, 'Ninh Bình', 'Sa Pa', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(24, 'Ninh Bình', 'Vùng Tàu', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(25, 'Ninh Bình', 'Đà Lạt', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(26, 'Ninh Bình', 'Nha Trang', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(27, 'Ninh Bình', 'Phan Thiết', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(28, 'Đà Nẵng', 'Hà Nội', '2021-07-24 09:18:49', '2021-07-24 09:18:49'),
(29, 'Đà Nẵng', 'Quảng Ninh', '2021-07-24 09:18:50', '2021-07-24 09:18:50'),
(30, 'Đà Nẵng', 'Ninh Bình', '2021-07-24 09:21:12', '2021-07-24 09:21:12'),
(31, 'Đà Nẵng', 'Sài Gòn', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(32, 'Đà Nẵng', 'Sa Pa', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(33, 'Đà Nẵng', 'Vùng Tàu', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(34, 'Đà Nẵng', 'Đà Lạt', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(35, 'Đà Nẵng', 'Nha Trang', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(36, 'Đà Nẵng', 'Phan Thiết', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(37, 'Sài Gòn', 'Hà Nội', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(38, 'Sài Gòn', 'Quảng Ninh', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(39, 'Sài Gòn', 'Ninh Bình', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(40, 'Sài Gòn', 'Đà Nẵng', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(41, 'Sài Gòn', 'Sa Pa', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(42, 'Sài Gòn', 'Vùng Tàu', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(43, 'Sài Gòn', 'Đà Lạt', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(44, 'Sài Gòn', 'Nha Trang', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(45, 'Sài Gòn', 'Phan Thiết', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(46, 'Sa Pa', 'Hà Nội', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(47, 'Sa Pa', 'Quảng Ninh', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(48, 'Sa Pa', 'Ninh Bình', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(49, 'Sa Pa', 'Đà Nẵng', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(50, 'Sa Pa', 'Sài Gòn', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(51, 'Sa Pa', 'Vùng Tàu', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(52, 'Sa Pa', 'Vùng Tàu', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(53, 'Sa Pa', 'Đà Lạt', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(54, 'Sa Pa', 'Nha Trang', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(55, 'Sa Pa', 'Phan Thiết', '2021-07-24 09:21:13', '2021-07-24 09:21:13'),
(56, 'Vùng Tàu', 'Hà Nội', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(57, 'Vùng Tàu', 'Quảng Ninh', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(58, 'Vùng Tàu', 'Ninh Bình', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(59, 'Vùng Tàu', 'Đà Nẵng', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(60, 'Vùng Tàu', 'Sài Gòn', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(61, 'Vùng Tàu', 'Sa Pa', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(62, 'Vùng Tàu', 'Đà Lạt', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(63, 'Vùng Tàu', 'Nha Trang', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(64, 'Vùng Tàu', 'Phan Thiết', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(65, 'Đà Lạt', 'Hà Nội', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(66, 'Đà Lạt', 'Quảng Ninh', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(67, 'Đà Lạt', 'Ninh Bình', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(68, 'Đà Lạt', 'Đà Nẵng', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(69, 'Đà Lạt', 'Sài Gòn', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(70, 'Đà Lạt', 'Sa Pa', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(71, 'Đà Lạt', 'Vùng Tàu', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(72, 'Đà Lạt', 'Nha Trang', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(73, 'Đà Lạt', 'Phan Thiết', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(74, 'Nha Trang', 'Hà Nội', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(75, 'Nha Trang', 'Quảng Ninh', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(76, 'Nha Trang', 'Ninh Bình', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(77, 'Nha Trang', 'Đà Nẵng', '2021-07-24 09:23:08', '2021-07-24 09:23:08'),
(78, 'Nha Trang', 'Sài Gòn', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(79, 'Nha Trang', 'Sa Pa', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(80, 'Nha Trang', 'Vùng Tàu', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(81, 'Nha Trang', 'Đà Lạt', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(82, 'Nha Trang', 'Phan Thiết', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(83, 'Phan Thiết', 'Hà Nội', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(84, 'Phan Thiết', 'Quảng Ninh', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(85, 'Phan Thiết', 'Ninh Bình', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(86, 'Phan Thiết', 'Đà Nẵng', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(87, 'Phan Thiết', 'Sài Gòn', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(88, 'Phan Thiết', 'Sa Pa', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(89, 'Phan Thiết', 'Vùng Tàu', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(90, 'Phan Thiết', 'Đà Lạt', '2021-07-24 09:24:17', '2021-07-24 09:24:17'),
(91, 'Phan Thiết', 'Nha Trang', '2021-07-24 09:24:17', '2021-07-24 09:24:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` int(11) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `gender`, `image`, `email_verified_at`, `password`, `level`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@gmail.com', '09739568059', 'Lỗ Khê - Liên Hà', '1', '1636369251.jpg', NULL, '$2y$10$lMH.NvX0XdRPdwgbs5Gip.jnOFJvb4MdLjgm8lm4W4hutvy3t.7cq', 1, NULL, '2021-07-24 08:35:45', '2021-11-08 11:00:51'),
(2, 'Đinh Huy Hoàng', 'dhuyhoang3107@gmail.com', '0973956805', 'Lỗ Khê - Liên Hà, Lỗ Khê - Liên Hà', '1', '1636358626.jpg', NULL, '$2y$10$fHrL9a6x0XWLeNZmASwKHu9PcY0u3qXjQr3wc3Hwy8dzAlNL540nq', 0, NULL, '2021-07-24 09:00:12', '2021-11-11 03:42:05'),
(4, 'Nhà xe X', 'nhaxeabc@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$SCP9zB8x6zuQIA0Id/BX/O2i4x3xfJ6cPSQJQLVvooWL7zpI5wY66', 1, NULL, '2021-08-14 07:38:16', '2021-11-24 06:20:51'),
(5, 'Hnid Yuh Gnaoh', 'hnidyuhgnaog@gmail.com', '0378763107', 'HN', '1', NULL, NULL, '$2y$10$XImDqqErcSB22SyI8lXVAuCPWGxjxoKAqK.oIo58JWKUiwJwZx.TK', 0, NULL, '2021-10-18 07:06:27', '2021-10-19 12:22:05'),
(6, 'Test', 'test@gmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$am5WSTwq41O58gTXxBCKse08guPdo9QvtXg/cchzR74xXCN6QWgH6', 1, NULL, '2021-11-24 06:55:39', '2021-11-24 06:55:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_role`
--

CREATE TABLE `user_role` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_role`
--

INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(3, 4, 2, NULL, NULL),
(5, 6, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ve`
--

CREATE TABLE `ve` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED DEFAULT NULL,
  `id_chuyenxe` int(10) UNSIGNED DEFAULT NULL,
  `id_donhang` int(10) UNSIGNED DEFAULT NULL,
  `vitrighe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mabimat` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mave` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trangthai` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ve`
--

INSERT INTO `ve` (`id`, `id_user`, `id_chuyenxe`, `id_donhang`, `vitrighe`, `mabimat`, `mave`, `trangthai`, `created_at`, `updated_at`) VALUES
(501, NULL, 16, NULL, 'A-1', 'xX4ZqYwW', '2uJSCqHe', 1, '2021-11-25 03:18:34', NULL),
(502, NULL, 16, NULL, 'A-2', '1Zqk9RrH', '8I4n7zPJ', 1, '2021-11-25 03:18:34', NULL),
(503, NULL, 16, NULL, 'A-3', 'gFseiRu5', 'CY2Tt7A4', 1, '2021-11-25 03:18:34', NULL),
(504, NULL, 16, NULL, 'A-4', 'FzQYDy9Z', '8jMWFkor', 1, '2021-11-25 03:18:34', NULL),
(505, NULL, 16, NULL, 'A-5', 'aVlrzvry', 'gEh0HQ5X', 1, '2021-11-25 03:18:34', NULL),
(506, NULL, 16, NULL, 'A-6', 'hsQWvRWl', 'CB4IhguY', 1, '2021-11-25 03:18:34', NULL),
(507, NULL, 16, NULL, 'A-7', '0mzoBZdc', 'FYdptCjV', 1, '2021-11-25 03:18:34', NULL),
(508, NULL, 16, NULL, 'A-8', 'FVfhHLRY', 'cInGZptg', 1, '2021-11-25 03:18:34', NULL),
(509, NULL, 16, NULL, 'A-9', 'X6m9pciR', '3A3isEot', 1, '2021-11-25 03:18:34', NULL),
(510, NULL, 16, NULL, 'A-10', '3ChORNb6', '9ExMHZ2a', 1, '2021-11-25 03:18:34', NULL),
(511, NULL, 16, NULL, 'A-11', 'WQ7ewbDL', 'njgnpqaC', 1, '2021-11-25 03:18:34', NULL),
(512, NULL, 16, NULL, 'A-12', 'CvvVYmal', 'sn9uy5jA', 1, '2021-11-25 03:18:34', NULL),
(513, NULL, 16, NULL, 'A-13', 'RvuACiWk', 'wyrLTgiT', 1, '2021-11-25 03:18:34', NULL),
(514, NULL, 16, NULL, 'A-14', '3Wob3U4W', 'tBI8SZ9y', 1, '2021-11-25 03:18:35', NULL),
(515, NULL, 16, NULL, 'A-15', '2zj2P3Hs', 'xI3UMKUX', 1, '2021-11-25 03:18:35', NULL),
(516, NULL, 16, NULL, 'A-16', 'DPdmryey', 'o2BWTRkb', 1, '2021-11-25 03:18:35', NULL),
(517, NULL, 16, NULL, 'A-17', 'HmVENCGA', 'sMeFZEGj', 1, '2021-11-25 03:18:35', NULL),
(518, NULL, 16, NULL, 'A-18', '9sIpO7mw', 'iXwZnEaa', 1, '2021-11-25 03:18:35', NULL),
(519, NULL, 16, NULL, 'A-19', 'OQ1d7v0x', 'sMlOg4yu', 1, '2021-11-25 03:18:35', NULL),
(520, NULL, 16, NULL, 'A-20', 'YadTcttL', 'P31rKymb', 1, '2021-11-25 03:18:35', NULL),
(521, NULL, 16, NULL, 'A-21', 'WJsER9UF', '71sq7VBd', 1, '2021-11-25 03:18:35', NULL),
(522, NULL, 16, NULL, 'A-22', 'CNBN3iXz', 'OOiEq52t', 1, '2021-11-25 03:18:35', NULL),
(523, NULL, 16, NULL, 'A-23', 'nQ0UfY33', 'sCab79vM', 1, '2021-11-25 03:18:35', NULL),
(524, NULL, 16, NULL, 'A-24', '3207CWzY', 'bbj8yxia', 1, '2021-11-25 03:18:35', NULL),
(525, NULL, 16, NULL, 'A-25', '73fXQX2e', 'hBb9NErx', 1, '2021-11-25 03:18:35', NULL),
(526, NULL, 16, NULL, 'A-26', 'FhIEHrN6', '5H560FDf', 1, '2021-11-25 03:18:35', NULL),
(527, NULL, 16, NULL, 'A-27', 'KtY6b3sq', 'qIKBYsyR', 1, '2021-11-25 03:18:35', NULL),
(528, NULL, 16, NULL, 'A-28', 'BhmYlN9A', '9dQGcO4V', 1, '2021-11-25 03:18:35', NULL),
(529, NULL, 16, NULL, 'A-29', 'aNemd9wm', 'BpJzYKAL', 1, '2021-11-25 03:18:35', NULL),
(530, NULL, 16, NULL, 'A-30', 'ZbtVK2Ua', '9hH7Ca0k', 1, '2021-11-25 03:18:35', NULL),
(531, NULL, 16, NULL, 'A-31', 'nJXEjSiH', 'ZLrEarqu', 1, '2021-11-25 03:18:35', NULL),
(532, NULL, 16, NULL, 'A-32', 'uBYUFNgk', 'XO7z2AqO', 1, '2021-11-25 03:18:35', NULL),
(533, NULL, 16, NULL, 'A-33', 'fkRYxxSV', 'p9bZGWVA', 1, '2021-11-25 03:18:35', NULL),
(534, NULL, 16, NULL, 'A-34', '4n7O4v9E', 'RjrnvOXC', 1, '2021-11-25 03:18:35', NULL),
(535, NULL, 16, NULL, 'A-35', 'MDI6PgCA', 'hHDfIga1', 1, '2021-11-25 03:18:35', NULL),
(536, NULL, 16, NULL, 'A-36', 'FtZalaqB', 'dZPPoXgY', 1, '2021-11-25 03:18:35', NULL),
(537, NULL, 16, NULL, 'A-37', 'AwHlQz6c', 'WdNrRZlZ', 1, '2021-11-25 03:18:35', NULL),
(538, NULL, 16, NULL, 'A-38', 'RemAnVeU', 'VCb6vomb', 1, '2021-11-25 03:18:35', NULL),
(539, NULL, 16, NULL, 'A-39', 'zPOAWjgB', '86dMusY4', 1, '2021-11-25 03:18:35', NULL),
(540, NULL, 16, NULL, 'A-40', '1pf0pFes', 'cQS4bNXR', 1, '2021-11-25 03:18:35', NULL),
(541, NULL, 16, NULL, 'A-41', 'SKBzFLIC', 'hc83mktr', 1, '2021-11-25 03:18:35', NULL),
(542, NULL, 16, NULL, 'A-42', 'knChJpk0', '97HqfSpU', 1, '2021-11-25 03:18:35', NULL),
(543, NULL, 16, NULL, 'A-43', 'ok9AcR8V', 'q55ZhGDY', 1, '2021-11-25 03:18:35', NULL),
(544, NULL, 16, NULL, 'A-44', 'N7EAj4sQ', 'zUCysq3q', 1, '2021-11-25 03:18:35', NULL),
(545, NULL, 16, NULL, 'A-45', 'poGh7yaA', 'ZjebasgP', 1, '2021-11-25 03:18:35', NULL),
(546, NULL, 16, NULL, 'A-46', 'DiYTCnqP', 'k1isdSHs', 1, '2021-11-25 03:18:35', NULL),
(547, NULL, 16, NULL, 'A-47', '6ZJ14503', 'IerN2n5S', 1, '2021-11-25 03:18:35', NULL),
(548, NULL, 16, NULL, 'A-48', '3IBpcPjk', 'bCH0fSee', 1, '2021-11-25 03:18:35', NULL),
(549, NULL, 16, NULL, 'A-49', 'aH5eg3ZX', 'Q2r16pwk', 1, '2021-11-25 03:18:35', NULL),
(550, 1, 19, 2, 'A-1', 'CRVjLMEq', 'tahqhD4z', 3, '2021-11-25 03:19:28', NULL),
(551, 1, 19, 2, 'A-2', 'kcaOEOzk', 'pyQ4DQCO', 3, '2021-11-25 03:19:28', NULL),
(552, NULL, 19, NULL, 'A-3', '6Y15xzn1', 'kz4FIN07', 1, '2021-11-25 03:19:28', NULL),
(553, NULL, 19, NULL, 'A-4', 'uBVnwX8r', 'hURKYxzS', 1, '2021-11-25 03:19:28', NULL),
(554, 1, 19, 2, 'A-5', 'fx7XpoWY', 'dgvT1CWm', 3, '2021-11-25 03:19:28', NULL),
(555, NULL, 19, NULL, 'A-6', 'Og03qSJa', 'gwmuYboU', 1, '2021-11-25 03:19:28', NULL),
(556, NULL, 19, NULL, 'A-7', 'zQBchiQh', 'HpahM8Zd', 1, '2021-11-25 03:19:28', NULL),
(557, NULL, 19, NULL, 'A-8', 'b8067Oj6', 'cNO8ewyr', 1, '2021-11-25 03:19:28', NULL),
(558, NULL, 19, NULL, 'A-9', 'euKjFw4K', 'OV1SEpOs', 1, '2021-11-25 03:19:28', NULL),
(559, NULL, 19, NULL, 'A-10', 'GpFrf6wv', '0BquF2XR', 1, '2021-11-25 03:19:28', NULL),
(560, NULL, 19, NULL, 'A-11', 'mr7bVEsz', 'eVCbKjL0', 1, '2021-11-25 03:19:29', NULL),
(561, NULL, 19, NULL, 'A-12', 'Ep90DmZv', 'H8bGh9gv', 1, '2021-11-25 03:19:29', NULL),
(562, NULL, 19, NULL, 'A-13', 'Hy2on3Bv', '7noq9yum', 1, '2021-11-25 03:19:29', NULL),
(563, NULL, 19, NULL, 'A-14', 'jBeojZ0z', 'f2HLD7vc', 1, '2021-11-25 03:19:29', NULL),
(564, NULL, 19, NULL, 'A-15', 'deaKnTcz', 'wUOm9J7d', 1, '2021-11-25 03:19:29', NULL),
(565, NULL, 19, NULL, 'A-16', '2eoHMPx6', 'O1CMEKUe', 1, '2021-11-25 03:19:29', NULL),
(566, NULL, 19, NULL, 'A-17', 'l4OqgqlU', 'KY1MfPnj', 1, '2021-11-25 03:19:29', NULL),
(567, NULL, 19, NULL, 'A-18', 'zRlu1g2K', 'A95neHZ0', 1, '2021-11-25 03:19:29', NULL),
(568, NULL, 19, NULL, 'A-19', 'QJVaIQqA', '9vCjkB4O', 1, '2021-11-25 03:19:29', NULL),
(569, NULL, 19, NULL, 'A-20', 'XgTxCkxA', 'ntolhah3', 1, '2021-11-25 03:19:29', NULL),
(570, NULL, 19, NULL, 'A-21', 'wgSQyp2D', '0xbZ8jzM', 1, '2021-11-25 03:19:29', NULL),
(571, NULL, 19, NULL, 'A-22', 'x3070zJZ', 'XTciOww2', 1, '2021-11-25 03:19:29', NULL),
(572, NULL, 19, NULL, 'A-23', 'XYcWWA2A', 'yyFlB39h', 1, '2021-11-25 03:19:29', NULL),
(573, NULL, 19, NULL, 'A-24', 'pnG0LpMz', '82FMDN4r', 1, '2021-11-25 03:19:29', NULL),
(574, NULL, 19, NULL, 'A-25', 'jJvah0Ni', 'FkszoMyb', 1, '2021-11-25 03:19:29', NULL),
(575, NULL, 19, NULL, 'A-26', 'xMKQut4s', 'HREUTi7J', 1, '2021-11-25 03:19:29', NULL),
(576, NULL, 19, NULL, 'A-27', '4U0NLDkV', '6ZltkWCW', 1, '2021-11-25 03:19:29', NULL),
(577, NULL, 19, NULL, 'A-28', '7vb9oLAS', 'IPdbuwKO', 1, '2021-11-25 03:19:29', NULL),
(578, NULL, 19, NULL, 'A-29', 'qZxH3A08', 'pqNRJt4j', 1, '2021-11-25 03:19:29', NULL),
(579, NULL, 19, NULL, 'A-30', 'ITKAxjQT', 'eIuRFaPd', 1, '2021-11-25 03:19:29', NULL),
(580, NULL, 19, NULL, 'A-31', '84GZwrzq', 'szmbz8dS', 1, '2021-11-25 03:19:29', NULL),
(581, NULL, 19, NULL, 'A-32', 'dUBWtAB7', 'RsVfm4lf', 1, '2021-11-25 03:19:29', NULL),
(582, NULL, 19, NULL, 'A-33', 'hYCkh9aY', 'yvnPW1c0', 1, '2021-11-25 03:19:29', NULL),
(583, NULL, 19, NULL, 'A-34', 'k388F1sY', 'soLTijYy', 1, '2021-11-25 03:19:29', NULL),
(584, NULL, 19, NULL, 'A-35', 'YZ4CZMDy', 'WYoKLbDt', 1, '2021-11-25 03:19:29', NULL),
(585, NULL, 19, NULL, 'A-36', '1vi0NYYN', 'wDJu2Jti', 1, '2021-11-25 03:19:29', NULL),
(586, NULL, 19, NULL, 'A-37', 'tab3cgak', 'kLOobxOm', 1, '2021-11-25 03:19:29', NULL),
(587, NULL, 19, NULL, 'A-38', 'EdnzSiDh', 'PnZhISh1', 1, '2021-11-25 03:19:29', NULL),
(588, NULL, 19, NULL, 'A-39', 'h3j3rSRf', 'EbLKFIUE', 1, '2021-11-25 03:19:29', NULL),
(589, NULL, 19, NULL, 'A-40', 'i3QgLMGF', 'YG1kI2Hz', 1, '2021-11-25 03:19:29', NULL),
(590, NULL, 19, NULL, 'A-41', 'mcCR3GTt', 'vMXnXqMr', 1, '2021-11-25 03:19:29', NULL),
(591, NULL, 19, NULL, 'A-42', 'Zu1sT2wR', 'aAfDtOdb', 1, '2021-11-25 03:19:29', NULL),
(592, NULL, 19, NULL, 'A-43', 'JdXXbLGY', 'WX2rTY1a', 1, '2021-11-25 03:19:29', NULL),
(593, NULL, 19, NULL, 'A-44', 'jN1NmpQ1', 'sB4mCvNz', 1, '2021-11-25 03:19:29', NULL),
(594, NULL, 19, NULL, 'A-45', 'EZZqMpVN', 'e71HFV8n', 1, '2021-11-25 03:19:29', NULL),
(595, NULL, 19, NULL, 'A-46', 'ALMjVAD7', 'wySNgqaZ', 1, '2021-11-25 03:19:29', NULL),
(596, NULL, 19, NULL, 'A-47', 'AAdhY3KN', 'dHNMog4y', 1, '2021-11-25 03:19:29', NULL),
(597, NULL, 19, NULL, 'A-48', '5WG61eE8', 'd007Skua', 1, '2021-11-25 03:19:29', NULL),
(598, NULL, 19, NULL, 'A-49', '9SlCIaeR', '4YHkV7w4', 1, '2021-11-25 03:19:29', NULL),
(599, NULL, 20, NULL, 'A-1', 'KYrzi1PC', 'mJbPd2UC', 1, '2021-11-25 03:23:03', NULL),
(600, NULL, 20, NULL, 'A-2', 'DRvx2YZW', 'aHhHIK2t', 1, '2021-11-25 03:23:03', NULL),
(601, NULL, 20, NULL, 'A-3', 'BG3ekCMn', '0W4c2udw', 1, '2021-11-25 03:23:03', NULL),
(602, NULL, 20, NULL, 'A-4', 'mGGEQNkP', 'TDqtPTdf', 1, '2021-11-25 03:23:03', NULL),
(603, NULL, 20, NULL, 'A-5', 'ws4vkzRM', 'SY2KVVtj', 1, '2021-11-25 03:23:03', NULL),
(604, NULL, 20, NULL, 'A-6', 'OnoAzgeZ', '4JloSNEC', 1, '2021-11-25 03:23:03', NULL),
(605, NULL, 20, NULL, 'A-7', 'vxyDUW6Q', 'B1WwqCgr', 1, '2021-11-25 03:23:03', NULL),
(606, NULL, 20, NULL, 'A-8', 'K0ZfKhPo', 'oPpscL1L', 1, '2021-11-25 03:23:03', NULL),
(607, NULL, 20, NULL, 'A-9', '81Ec6VgP', 'aMAJTWBf', 1, '2021-11-25 03:23:03', NULL),
(608, NULL, 21, NULL, 'A-1', 'JXxlceYw', 'm1rWMkqf', 1, '2021-11-25 03:23:46', NULL),
(609, NULL, 21, NULL, 'A-2', 'Pi6mKjtA', '11FuNdMt', 1, '2021-11-25 03:23:47', NULL),
(610, NULL, 21, NULL, 'A-3', 'KaJk8flw', 'VNfgz3Hd', 1, '2021-11-25 03:23:47', NULL),
(611, NULL, 21, NULL, 'A-4', 'apKxtNcd', 'YgWsaVRZ', 1, '2021-11-25 03:23:47', NULL),
(612, NULL, 21, NULL, 'A-5', 'me1DzDhH', 'ANsJVzrp', 1, '2021-11-25 03:23:47', NULL),
(613, NULL, 21, NULL, 'A-6', 'tIwRzGv2', 'M9sfsNPC', 1, '2021-11-25 03:23:47', NULL),
(614, NULL, 21, NULL, 'A-7', '03xye17R', 'mqGC54OD', 1, '2021-11-25 03:23:47', NULL),
(615, NULL, 21, NULL, 'A-8', 'Pexerqfs', 'kFx7etgb', 1, '2021-11-25 03:23:47', NULL),
(616, NULL, 21, NULL, 'A-9', 'LA0LvaZK', 'KHuAfAjZ', 1, '2021-11-25 03:23:47', NULL),
(617, NULL, 21, NULL, 'A-10', 'zpLhNPWR', '1lgmoYlr', 1, '2021-11-25 03:23:47', NULL),
(618, NULL, 21, NULL, 'A-11', 'aHRxKg9i', 'vW4NU8bB', 1, '2021-11-25 03:23:47', NULL),
(619, NULL, 21, NULL, 'A-12', 'x4zeaTxE', 'v9NJ4WTF', 1, '2021-11-25 03:23:47', NULL),
(620, NULL, 21, NULL, 'A-13', 'n6evrjix', 'dhCzXQx3', 1, '2021-11-25 03:23:47', NULL),
(621, NULL, 21, NULL, 'A-14', 'uInWaR9L', '7nM5KzfO', 1, '2021-11-25 03:23:47', NULL),
(622, NULL, 21, NULL, 'A-15', 'sLg6jEm8', 'JjhF6tGx', 1, '2021-11-25 03:23:47', NULL),
(623, NULL, 21, NULL, 'A-16', 'yRa7hJCK', 'hAqsl2OF', 1, '2021-11-25 03:23:47', NULL),
(624, NULL, 21, NULL, 'A-17', 'RsYkJbhh', 'gcr6JQwL', 1, '2021-11-25 03:23:47', NULL),
(625, NULL, 21, NULL, 'A-18', 'KMVy1Y44', 'PkiW72Kq', 1, '2021-11-25 03:23:47', NULL),
(626, NULL, 21, NULL, 'A-19', '9uXrOnvz', 'BnoXerqW', 1, '2021-11-25 03:23:47', NULL),
(627, NULL, 21, NULL, 'A-20', 'GUPqkjI3', 'tnlrQ9pQ', 1, '2021-11-25 03:23:47', NULL),
(628, NULL, 21, NULL, 'A-21', 'nVCuO8DB', '3yx7ESEB', 1, '2021-11-25 03:23:47', NULL),
(629, NULL, 21, NULL, 'A-22', 'VJ3tc4TW', 'PJ0s2N7w', 1, '2021-11-25 03:23:47', NULL),
(630, NULL, 21, NULL, 'A-23', 'hEaEhaEB', '749xccBH', 1, '2021-11-25 03:23:47', NULL),
(631, NULL, 21, NULL, 'A-24', 'IO406qcy', '1Jls3sBi', 1, '2021-11-25 03:23:47', NULL),
(632, NULL, 21, NULL, 'A-25', 'LanThoLr', 'tSuWrbbC', 1, '2021-11-25 03:23:47', NULL),
(633, NULL, 21, NULL, 'A-26', 'Ms5noe1H', 'MVG1TKoX', 1, '2021-11-25 03:23:47', NULL),
(634, NULL, 21, NULL, 'A-27', 'v4ALopdN', 'HsRnj6fH', 1, '2021-11-25 03:23:47', NULL),
(635, NULL, 21, NULL, 'A-28', 'so0hRV8l', 'jJe9UGjf', 1, '2021-11-25 03:23:47', NULL),
(636, NULL, 21, NULL, 'A-29', 'GSe9hhb6', '8NVG7seK', 1, '2021-11-25 03:23:47', NULL),
(637, NULL, 21, NULL, 'A-30', 'QyKtyUsg', 'VWINTZ79', 1, '2021-11-25 03:23:47', NULL),
(638, NULL, 21, NULL, 'A-31', 'dGsocVXr', '29XkTRn6', 1, '2021-11-25 03:23:47', NULL),
(639, NULL, 21, NULL, 'A-32', 'CCbBfJfA', '21TCYiY8', 1, '2021-11-25 03:23:47', NULL),
(640, NULL, 21, NULL, 'A-33', 'ocFwPznU', 'YYzgMaOz', 1, '2021-11-25 03:23:47', NULL),
(641, NULL, 21, NULL, 'A-34', '81CUdek0', 'rNTkuoil', 1, '2021-11-25 03:23:47', NULL),
(642, NULL, 21, NULL, 'A-35', 'gcUbvyTp', '9bfxefWQ', 1, '2021-11-25 03:23:47', NULL),
(643, NULL, 21, NULL, 'A-36', 'VHfV35G9', 'NpP3qaG5', 1, '2021-11-25 03:23:47', NULL),
(644, NULL, 21, NULL, 'A-37', 'BMetAv13', 'CftE1JiW', 1, '2021-11-25 03:23:47', NULL),
(645, NULL, 21, NULL, 'A-38', '41k8tp6v', 'ddHKMexw', 1, '2021-11-25 03:23:47', NULL),
(646, NULL, 21, NULL, 'A-39', 'KJRCGQFk', 'Fj92oZYV', 1, '2021-11-25 03:23:47', NULL),
(647, NULL, 21, NULL, 'A-40', 'myjcdIjm', 'hHqdRLcc', 1, '2021-11-25 03:23:47', NULL),
(648, NULL, 21, NULL, 'A-41', 'WKMSqvuY', 'T15yPxOY', 1, '2021-11-25 03:23:47', NULL),
(649, NULL, 21, NULL, 'A-42', 'WXTPG1bP', 'DdGd2xdP', 1, '2021-11-25 03:23:47', NULL),
(650, NULL, 21, NULL, 'A-43', 'TbrG7IG7', '5ssbTTtf', 1, '2021-11-25 03:23:47', NULL),
(651, NULL, 21, NULL, 'A-44', 'WdS7z1PD', '0WQaoY4D', 1, '2021-11-25 03:23:47', NULL),
(652, NULL, 21, NULL, 'A-45', 'N54Bou1S', 'B97ozZ6L', 1, '2021-11-25 03:23:47', NULL),
(653, NULL, 21, NULL, 'A-46', 'WIrcogJd', 'PboCb29G', 1, '2021-11-25 03:23:47', NULL),
(654, NULL, 21, NULL, 'A-47', 'kgpqIvjv', 'A5bz75OE', 1, '2021-11-25 03:23:48', NULL),
(655, NULL, 21, NULL, 'A-48', 'Y9RKLukp', '0IT0G95C', 1, '2021-11-25 03:23:48', NULL),
(656, NULL, 21, NULL, 'A-49', 'fwMgsc7F', 'lgKYFlsA', 1, '2021-11-25 03:23:48', NULL),
(657, NULL, 21, NULL, 'A-50', 'r5ZjY9fF', 'AooBoqXK', 1, '2021-11-25 03:23:48', NULL),
(658, NULL, 23, NULL, 'A-1', '4v2oIQEq', 'kopXQm5b', 1, '2021-11-25 03:27:45', NULL),
(659, NULL, 23, NULL, 'A-2', 'IDm4QvU1', 'El0u1wBq', 1, '2021-11-25 03:27:45', NULL),
(660, NULL, 23, NULL, 'A-3', 'NOlZ2pEo', 'lSCmBlYg', 1, '2021-11-25 03:27:45', NULL),
(661, NULL, 23, NULL, 'A-4', 'oIgPhLfJ', 'AQckTGlI', 1, '2021-11-25 03:27:45', NULL),
(662, NULL, 23, NULL, 'A-5', 'azPC8ObD', 'lQpE8zZc', 1, '2021-11-25 03:27:45', NULL),
(663, NULL, 23, NULL, 'A-6', 'lMeHKROA', 'NTRUDg7k', 1, '2021-11-25 03:27:45', NULL),
(664, NULL, 23, NULL, 'A-7', 'ri4k7rtq', 'eAYu9jrX', 1, '2021-11-25 03:27:45', NULL),
(665, NULL, 23, NULL, 'A-8', 'Cog95PYd', 'AN7gtUqV', 1, '2021-11-25 03:27:45', NULL),
(666, NULL, 23, NULL, 'A-9', 'K7ZbeCwm', 'EvYpfdvX', 1, '2021-11-25 03:27:45', NULL),
(667, NULL, 23, NULL, 'A-10', 'Vt2k9Zaf', 'CiVtiYPO', 1, '2021-11-25 03:27:45', NULL),
(668, NULL, 23, NULL, 'A-11', '6MaP5csK', '2U2lZYUk', 1, '2021-11-25 03:27:45', NULL),
(669, NULL, 23, NULL, 'A-12', 'yVImjjlc', 'xr22Ipnb', 1, '2021-11-25 03:27:45', NULL),
(670, NULL, 23, NULL, 'A-13', 'OwdGfPz5', 'dOYTFbIc', 1, '2021-11-25 03:27:45', NULL),
(671, NULL, 23, NULL, 'A-14', 'PKBCPTNS', 'EW024f3M', 1, '2021-11-25 03:27:45', NULL),
(672, NULL, 23, NULL, 'A-15', 'rJqQ2RmG', '5SCcxISR', 1, '2021-11-25 03:27:45', NULL),
(673, NULL, 23, NULL, 'A-16', 'u98jKozA', 'M2ml7smR', 1, '2021-11-25 03:27:45', NULL),
(674, NULL, 23, NULL, 'A-17', 'UoxtJw7H', 'LBp88bi2', 1, '2021-11-25 03:27:46', NULL),
(675, NULL, 23, NULL, 'A-18', 'QuYrYsc2', 'oIAFQGUl', 1, '2021-11-25 03:27:46', NULL),
(676, NULL, 23, NULL, 'A-19', 'ASojQkNb', 'lTj9NuRN', 1, '2021-11-25 03:27:46', NULL),
(677, NULL, 23, NULL, 'A-20', 'wIJmvveG', 'u80JIEUk', 1, '2021-11-25 03:27:46', NULL),
(678, NULL, 23, NULL, 'A-21', 'yXc8jI3q', 'f0t9blVh', 1, '2021-11-25 03:27:46', NULL),
(679, NULL, 23, NULL, 'A-22', 'oixrFlbN', '0M9iE8GK', 1, '2021-11-25 03:27:46', NULL),
(680, NULL, 23, NULL, 'A-23', 'SZrMEbh1', 'dtxSpPJU', 1, '2021-11-25 03:27:46', NULL),
(681, NULL, 23, NULL, 'A-24', 'uzEPUpa7', 'ahLNxz4y', 1, '2021-11-25 03:27:46', NULL),
(682, NULL, 23, NULL, 'A-25', 'ATBsCRQX', 'z3yQcRZ1', 1, '2021-11-25 03:27:46', NULL),
(683, NULL, 23, NULL, 'A-26', 'T7BZ5xVw', 'vcJubjuu', 1, '2021-11-25 03:27:46', NULL),
(684, NULL, 23, NULL, 'A-27', 'tc7WLcQK', 'vddIVtja', 1, '2021-11-25 03:27:46', NULL),
(685, NULL, 23, NULL, 'A-28', 'g1cPtou6', '7c1TjgqO', 1, '2021-11-25 03:27:46', NULL),
(686, NULL, 23, NULL, 'A-29', 'GdTCjhcO', '3S2TDG8H', 1, '2021-11-25 03:27:46', NULL),
(687, NULL, 23, NULL, 'A-30', '9ajcXhwB', 'KbkDaPgT', 1, '2021-11-25 03:27:46', NULL),
(688, NULL, 23, NULL, 'A-31', 'IgqSEB9S', 'fjtGQHf2', 1, '2021-11-25 03:27:46', NULL),
(689, NULL, 23, NULL, 'A-32', '8Ix9RFeS', 'pP3nOQES', 1, '2021-11-25 03:27:46', NULL),
(690, NULL, 23, NULL, 'A-33', 'ujyqWR6G', '4XonM4gg', 1, '2021-11-25 03:27:46', NULL),
(691, NULL, 23, NULL, 'A-34', 'FGvUEkCO', 'YAnWRSRU', 1, '2021-11-25 03:27:46', NULL),
(692, NULL, 23, NULL, 'A-35', 'cTbXRMzh', 'oDS2NpKM', 1, '2021-11-25 03:27:46', NULL),
(693, NULL, 23, NULL, 'A-36', 'catCle6y', 'ORsgxFc1', 1, '2021-11-25 03:27:46', NULL),
(694, NULL, 23, NULL, 'A-37', 'RcDKFIvJ', 'Mky2I710', 1, '2021-11-25 03:27:46', NULL),
(695, NULL, 23, NULL, 'A-38', 'EWMSrYR1', 'KJtGZjfp', 1, '2021-11-25 03:27:46', NULL),
(696, NULL, 23, NULL, 'A-39', 'PXwyKC25', '0mEm3PX0', 1, '2021-11-25 03:27:46', NULL),
(697, NULL, 23, NULL, 'A-40', 'fLZFOaL8', '9VWaYO0R', 1, '2021-11-25 03:27:46', NULL),
(698, NULL, 23, NULL, 'A-41', 'sZjcb0LK', 'cPLf8AEx', 1, '2021-11-25 03:27:46', NULL),
(699, NULL, 23, NULL, 'A-42', 'PqcSC12j', 'RMHbLHr0', 1, '2021-11-25 03:27:46', NULL),
(700, NULL, 23, NULL, 'A-43', 'KvnCF7hP', '8DjEiDnN', 1, '2021-11-25 03:27:46', NULL),
(701, NULL, 23, NULL, 'A-44', 'YM3sj2pe', 'rhEg4fRx', 1, '2021-11-25 03:27:46', NULL),
(702, NULL, 23, NULL, 'A-45', 'PrU8s8M2', '5MsNl40E', 1, '2021-11-25 03:27:46', NULL),
(703, NULL, 23, NULL, 'A-46', 'Qe9QR5Oa', 'UUS5SpRQ', 1, '2021-11-25 03:27:46', NULL),
(704, NULL, 23, NULL, 'A-47', 'KUgAZbhR', 'aNWSwwPs', 1, '2021-11-25 03:27:46', NULL),
(705, NULL, 23, NULL, 'A-48', '9awW1EDJ', 'S8X09kM2', 1, '2021-11-25 03:27:46', NULL),
(706, NULL, 23, NULL, 'A-49', 'KboMAnMg', 'e4rzGtsb', 1, '2021-11-25 03:27:46', NULL),
(707, NULL, 24, NULL, 'A-1', '8ZFpcLdj', 'Vvm3pedW', 1, '2021-11-25 03:29:44', NULL),
(708, NULL, 24, NULL, 'A-2', 'Vo1Vlz9Q', 'dZPeWIXr', 1, '2021-11-25 03:29:44', NULL),
(709, NULL, 24, NULL, 'A-3', 'ByXXXVr3', 'DDab5X13', 1, '2021-11-25 03:29:44', NULL),
(710, NULL, 24, NULL, 'A-4', '0BLI9HQ5', 'wPHzYCdq', 1, '2021-11-25 03:29:44', NULL),
(711, NULL, 24, NULL, 'A-5', 'XBvvgu32', 'SBs6boCN', 1, '2021-11-25 03:29:44', NULL),
(712, NULL, 24, NULL, 'A-6', 'Zltm5Oo0', 'qa32f768', 1, '2021-11-25 03:29:44', NULL),
(713, NULL, 24, NULL, 'A-7', 'P4L8LcVz', 'Fa8wTMfG', 1, '2021-11-25 03:29:44', NULL),
(714, NULL, 24, NULL, 'A-8', '6ExZboZj', 'Ef4ETmLJ', 1, '2021-11-25 03:29:44', NULL),
(715, NULL, 24, NULL, 'A-9', 'VADO9mwo', 'a85OHuzz', 1, '2021-11-25 03:29:44', NULL),
(716, NULL, 24, NULL, 'A-10', '2OOBO1CW', '1sQsXeIt', 1, '2021-11-25 03:29:44', NULL),
(717, NULL, 24, NULL, 'A-11', 's851AOwI', '1qbdlo15', 1, '2021-11-25 03:29:44', NULL),
(718, NULL, 24, NULL, 'A-12', 'nTKFJe4L', 'A4PEMKBK', 1, '2021-11-25 03:29:44', NULL),
(719, NULL, 24, NULL, 'A-13', 'u1MFjAPI', 'Cn8h9ZlT', 1, '2021-11-25 03:29:44', NULL),
(720, NULL, 24, NULL, 'A-14', 'cON2KCAl', 'y9j0geMY', 1, '2021-11-25 03:29:44', NULL),
(721, NULL, 24, NULL, 'A-15', 'XZBnSYE3', 'N07nwfu7', 1, '2021-11-25 03:29:44', NULL),
(722, NULL, 24, NULL, 'A-16', 'bMsmzpWd', 'OcYLqyna', 1, '2021-11-25 03:29:44', NULL),
(723, NULL, 24, NULL, 'A-17', 'biv03IrN', 'uC16zB9M', 1, '2021-11-25 03:29:44', NULL),
(724, NULL, 24, NULL, 'A-18', 'cDLVdKTG', 'vJCjOrOy', 1, '2021-11-25 03:29:44', NULL),
(725, NULL, 24, NULL, 'A-19', 'fxXDQmRI', '8Rtgj4pQ', 1, '2021-11-25 03:29:44', NULL),
(726, NULL, 24, NULL, 'A-20', '7ud49vjn', 'NYqwZ3fs', 1, '2021-11-25 03:29:44', NULL),
(727, NULL, 24, NULL, 'A-21', 'xQdbqQJJ', '57l1H8nF', 1, '2021-11-25 03:29:44', NULL),
(728, NULL, 24, NULL, 'A-22', 'hoL2tQ0k', 'Bz7Sq6Ur', 1, '2021-11-25 03:29:44', NULL),
(729, NULL, 24, NULL, 'A-23', 'CQjjgzRa', '4eLbMzlW', 1, '2021-11-25 03:29:44', NULL),
(730, NULL, 24, NULL, 'A-24', 'CjkSN1rQ', 'hnoSJHuB', 1, '2021-11-25 03:29:44', NULL),
(731, NULL, 24, NULL, 'A-25', 'CeldMW0w', '6bDzdseP', 1, '2021-11-25 03:29:45', NULL),
(732, NULL, 24, NULL, 'A-26', 'Da5yD8Fr', 'ABk24xkt', 1, '2021-11-25 03:29:45', NULL),
(733, NULL, 24, NULL, 'A-27', 'fJR6CnJE', 'eEZqsS4F', 1, '2021-11-25 03:29:45', NULL),
(734, NULL, 24, NULL, 'A-28', 'LRMKzokY', 'HZGQt2vY', 1, '2021-11-25 03:29:45', NULL),
(735, NULL, 24, NULL, 'A-29', 'zeCi0xPk', 'RV80VY1B', 1, '2021-11-25 03:29:45', NULL),
(736, NULL, 24, NULL, 'A-30', 'r1VA0izz', 'UUqIEzTs', 1, '2021-11-25 03:29:45', NULL),
(737, NULL, 24, NULL, 'A-31', 'vsljutMG', 'AthQkQ1i', 1, '2021-11-25 03:29:45', NULL),
(738, NULL, 24, NULL, 'A-32', 'jtAZ65P7', 'tvg7ZvIe', 1, '2021-11-25 03:29:45', NULL),
(739, NULL, 24, NULL, 'A-33', 'kssaMDFh', 'lYzk6JAF', 1, '2021-11-25 03:29:45', NULL),
(740, NULL, 24, NULL, 'A-34', 'm8Sqo05Q', 'mxZYNt3f', 1, '2021-11-25 03:29:45', NULL),
(741, NULL, 24, NULL, 'A-35', 'zTQoi32X', '5b3LNtgc', 1, '2021-11-25 03:29:45', NULL),
(742, NULL, 24, NULL, 'A-36', 'Uzbi6OVS', 'dP841Sum', 1, '2021-11-25 03:29:45', NULL),
(743, NULL, 24, NULL, 'A-37', 'e37dO6y8', 'l3cRuxWt', 1, '2021-11-25 03:29:45', NULL),
(744, NULL, 24, NULL, 'A-38', 'uA0H6xbO', 'OXY6icGR', 1, '2021-11-25 03:29:45', NULL),
(745, NULL, 24, NULL, 'A-39', 'hRjW63HJ', 'nkR5j6wu', 1, '2021-11-25 03:29:45', NULL),
(746, NULL, 24, NULL, 'A-40', 'NmKzhQHu', 'smnVdGnW', 1, '2021-11-25 03:29:45', NULL),
(747, NULL, 24, NULL, 'A-41', '8CeYmJyf', 'mF2HXbyx', 1, '2021-11-25 03:29:45', NULL),
(748, NULL, 24, NULL, 'A-42', 'mAVOkOFX', '3wfKGj2T', 1, '2021-11-25 03:29:45', NULL),
(749, NULL, 24, NULL, 'A-43', 'lZWclEcE', 'c11BUK3D', 1, '2021-11-25 03:29:45', NULL),
(750, NULL, 24, NULL, 'A-44', '6xSb5cEt', 'ukBU2lTA', 1, '2021-11-25 03:29:45', NULL),
(751, NULL, 24, NULL, 'A-45', 'onNvCfo1', 'Phm3V37x', 1, '2021-11-25 03:29:45', NULL),
(752, NULL, 24, NULL, 'A-46', 'd2wOO7hy', 'URteU4Hu', 1, '2021-11-25 03:29:45', NULL),
(753, NULL, 24, NULL, 'A-47', 'zjRRoobJ', '9oFPUAkB', 1, '2021-11-25 03:29:45', NULL),
(754, NULL, 24, NULL, 'A-48', 'yAePXXeZ', '8WFOec5S', 1, '2021-11-25 03:29:45', NULL),
(755, NULL, 24, NULL, 'A-49', 'yhpDIQJO', 'l2quE3Sy', 1, '2021-11-25 03:29:45', NULL),
(756, NULL, 24, NULL, 'A-50', 'd1jsWwDM', 'ZMv7fQ18', 1, '2021-11-25 03:29:45', NULL),
(757, NULL, 25, NULL, 'A-1', 'ZkasJ4uQ', 'sGnFnZnc', 1, '2021-11-25 03:31:02', NULL),
(758, NULL, 25, NULL, 'A-2', 'qwQvHPL0', 'bTJQRbpP', 1, '2021-11-25 03:31:02', NULL),
(759, NULL, 25, NULL, 'A-3', 'HDr9oddE', '13hpTKXI', 1, '2021-11-25 03:31:02', NULL),
(760, NULL, 25, NULL, 'A-4', 'JXEAINSl', 'vcJTybUE', 1, '2021-11-25 03:31:03', NULL),
(761, NULL, 25, NULL, 'A-5', '0uCpuQDM', '6y5M7Qrw', 1, '2021-11-25 03:31:03', NULL),
(762, NULL, 25, NULL, 'A-6', 'SXA1l1ii', 'o8XPiAFF', 1, '2021-11-25 03:31:03', NULL),
(763, NULL, 25, NULL, 'A-7', 'OcrHiFEr', 'ijYzUz8g', 1, '2021-11-25 03:31:03', NULL),
(764, NULL, 25, NULL, 'A-8', 'emYAH5U9', 'hmzM4uPw', 1, '2021-11-25 03:31:03', NULL),
(765, NULL, 25, NULL, 'A-9', 'a0bgIKd3', 'TfEzf89r', 1, '2021-11-25 03:31:03', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `viewspage`
--

CREATE TABLE `viewspage` (
  `id` int(10) UNSIGNED NOT NULL,
  `viewpage` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `viewspage`
--

INSERT INTO `viewspage` (`id`, `viewpage`, `created_at`, `updated_at`) VALUES
(1, '390', NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xe`
--

CREATE TABLE `xe` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_loaixe` int(10) UNSIGNED DEFAULT NULL,
  `tenxe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bienso` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anhxe` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trangthai` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `xe`
--

INSERT INTO `xe` (`id`, `id_loaixe`, `tenxe`, `bienso`, `anhxe`, `trangthai`, `created_at`, `updated_at`) VALUES
(1, 1, 'Tràng An Limousin', '29A-GPMN1979', '1627120511.jpg', 1, '2021-07-24 09:55:11', '2021-07-24 09:55:11'),
(2, 2, 'Tràng An Limousin', '29A-GPMN1978', '1627120525.jpg', 1, '2021-07-24 09:55:25', '2021-07-24 09:55:25'),
(3, 3, 'Tràng An Limousin', '29A-GPMN1975', '1627120536.jpg', 1, '2021-07-24 09:55:36', '2021-07-24 09:55:36'),
(4, 4, 'Xe Khách Huy Hoàng', '29A-GPMN1479', '1627120562.png', 1, '2021-07-24 09:56:02', '2021-07-24 09:56:02'),
(5, 5, 'Xe Khách Huy Hoàng', '29A-GPMNG1975', '1627120577.jpg', 1, '2021-07-24 09:56:17', '2021-07-24 09:56:17'),
(6, 3, 'Bảo Yến Bus', '12B-AS3546', '1628924854.jpg', 1, '2021-08-14 07:07:34', '2021-08-14 07:07:34'),
(9, 1, 'Bảo Yến', '29A-S10789', NULL, 1, '2021-11-25 03:17:43', '2021-11-25 03:17:43');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chuyenxe`
--
ALTER TABLE `chuyenxe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chuyenxe_id_lotrinh_foreign` (`id_lotrinh`),
  ADD KEY `chuyenxe_id_nhanvien_foreign` (`id_nhanvien`),
  ADD KEY `chuyenxe_id_xe_foreign` (`id_xe`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `diadiem`
--
ALTER TABLE `diadiem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `diadiem_tendiadiem_unique` (`tendiadiem`);

--
-- Chỉ mục cho bảng `diemdontra`
--
ALTER TABLE `diemdontra`
  ADD PRIMARY KEY (`id`),
  ADD KEY `diemdontra_id_tuyenduong_foreign` (`id_tuyenduong`);

--
-- Chỉ mục cho bảng `dondatve`
--
ALTER TABLE `dondatve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dondatve_id_xe_foreign` (`id_xe`),
  ADD KEY `dondatve_id_user_foreign` (`id_user`),
  ADD KEY `dondatve_id_chuyenxe_foreign` (`id_chuyenxe`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lotrinh`
--
ALTER TABLE `lotrinh`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lotrinh_id_tuyenduong_foreign` (`id_tuyenduong`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `news_slugnews_unique` (`slugnews`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nhanvien_cmnd_unique` (`cmnd`),
  ADD UNIQUE KEY `nhanvien_banglai_unique` (`banglai`),
  ADD UNIQUE KEY `nhanvien_dienthoai_unique` (`dienthoai`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_p_dondatve_id_foreign` (`p_dondatve_id`),
  ADD KEY `payments_p_user_id_foreign` (`p_user_id`);

--
-- Chỉ mục cho bảng `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_key_code_unique` (`key_code`);

--
-- Chỉ mục cho bảng `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`),
  ADD KEY `permission_role_permission_id_foreign` (`permission_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tuyenduong`
--
ALTER TABLE `tuyenduong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- Chỉ mục cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_role_user_id_foreign` (`user_id`),
  ADD KEY `user_role_role_id_foreign` (`role_id`);

--
-- Chỉ mục cho bảng `ve`
--
ALTER TABLE `ve`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ve_mabimat_unique` (`mabimat`),
  ADD UNIQUE KEY `ve_mave_unique` (`mave`),
  ADD KEY `ve_id_user_foreign` (`id_user`),
  ADD KEY `ve_id_chuyenxe_foreign` (`id_chuyenxe`);

--
-- Chỉ mục cho bảng `viewspage`
--
ALTER TABLE `viewspage`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `xe`
--
ALTER TABLE `xe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `xe_id_loaixe_foreign` (`id_loaixe`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chuyenxe`
--
ALTER TABLE `chuyenxe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `diadiem`
--
ALTER TABLE `diadiem`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `diemdontra`
--
ALTER TABLE `diemdontra`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `dondatve`
--
ALTER TABLE `dondatve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `loaixe`
--
ALTER TABLE `loaixe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `lotrinh`
--
ALTER TABLE `lotrinh`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT cho bảng `permission_role`
--
ALTER TABLE `permission_role`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tuyenduong`
--
ALTER TABLE `tuyenduong`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `ve`
--
ALTER TABLE `ve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=766;

--
-- AUTO_INCREMENT cho bảng `viewspage`
--
ALTER TABLE `viewspage`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `xe`
--
ALTER TABLE `xe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chuyenxe`
--
ALTER TABLE `chuyenxe`
  ADD CONSTRAINT `chuyenxe_id_lotrinh_foreign` FOREIGN KEY (`id_lotrinh`) REFERENCES `lotrinh` (`id`),
  ADD CONSTRAINT `chuyenxe_id_nhanvien_foreign` FOREIGN KEY (`id_nhanvien`) REFERENCES `nhanvien` (`id`),
  ADD CONSTRAINT `chuyenxe_id_xe_foreign` FOREIGN KEY (`id_xe`) REFERENCES `xe` (`id`);

--
-- Các ràng buộc cho bảng `diemdontra`
--
ALTER TABLE `diemdontra`
  ADD CONSTRAINT `diemdontra_id_tuyenduong_foreign` FOREIGN KEY (`id_tuyenduong`) REFERENCES `tuyenduong` (`id`);

--
-- Các ràng buộc cho bảng `dondatve`
--
ALTER TABLE `dondatve`
  ADD CONSTRAINT `dondatve_id_chuyenxe_foreign` FOREIGN KEY (`id_chuyenxe`) REFERENCES `chuyenxe` (`id`),
  ADD CONSTRAINT `dondatve_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `dondatve_id_xe_foreign` FOREIGN KEY (`id_xe`) REFERENCES `xe` (`id`);

--
-- Các ràng buộc cho bảng `lotrinh`
--
ALTER TABLE `lotrinh`
  ADD CONSTRAINT `lotrinh_id_tuyenduong_foreign` FOREIGN KEY (`id_tuyenduong`) REFERENCES `tuyenduong` (`id`);

--
-- Các ràng buộc cho bảng `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_p_dondatve_id_foreign` FOREIGN KEY (`p_dondatve_id`) REFERENCES `dondatve` (`id`),
  ADD CONSTRAINT `payments_p_user_id_foreign` FOREIGN KEY (`p_user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Các ràng buộc cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `user_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `user_role_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `ve`
--
ALTER TABLE `ve`
  ADD CONSTRAINT `ve_id_chuyenxe_foreign` FOREIGN KEY (`id_chuyenxe`) REFERENCES `chuyenxe` (`id`),
  ADD CONSTRAINT `ve_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `xe`
--
ALTER TABLE `xe`
  ADD CONSTRAINT `xe_id_loaixe_foreign` FOREIGN KEY (`id_loaixe`) REFERENCES `loaixe` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
