import React, {useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/authContext";


const LayoutAdmin = () => {
    const {currentUser, logout} = useContext(AuthContext);

    return (
        <div className="admin-layout">
            <nav className="sidebar">
                
                <ul>
                    <li>
                        <Link>
                            <i class="fa-solid fa-user"></i>
                            {currentUser && currentUser.username}
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-solid fa-gauge"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-solid fa-user"></i>
                            Quản lý người dùng
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-solid fa-table-cells-large"></i>
                            Danh mục sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-solid fa-leaf"></i>
                            Quản lý sản phẩm
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <i class="fa-brands fa-first-order-alt"></i>
                            Quản lý đơn hàng
                        </Link>
                    </li>
                    <li>
                        <Link onClick={logout}>
                            <i class="fa-solid fa-right-from-bracket"></i>
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

