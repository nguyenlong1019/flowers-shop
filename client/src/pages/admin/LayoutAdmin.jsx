import React, {useContext} from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


const LayoutAdmin = () => {
    const {currentUser, logout} = useContext(AuthContext);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className="admin-layout">
            <nav className="sidebar">
                
                <ul>
                    <li>
                        <Link>
                            <i className="fa-solid fa-user"></i>
                            {currentUser && currentUser.username}
                        </Link>
                    </li>
                    <li className={isActive("/admin")}>
                        <Link to="/admin">
                            <i className="fa-solid fa-gauge"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className={isActive("/admin/users")}>
                        <Link to="/admin/users">
                            <i className="fa-solid fa-user"></i>
                            Quản lý người dùng
                        </Link>
                    </li>
                    <li className={isActive("/admin/categories")}>
                        <Link to="/admin/categories">
                            <i className="fa-solid fa-table-cells-large"></i>
                            Danh mục sản phẩm
                        </Link>
                    </li>
                    <li className={isActive("/admin/products")}>
                        <Link to="/admin/products">
                            <i className="fa-solid fa-leaf"></i>
                            Quản lý sản phẩm
                        </Link>
                    </li>
                    <li className={isActive("/admin/orders")}>
                        <Link to="/admin/orders">
                            <i className="fa-brands fa-first-order-alt"></i>
                            Quản lý đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link onClick={logout}>
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Đăng xuất
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutAdmin;

