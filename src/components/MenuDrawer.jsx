import React from 'react'; 
import { Button, Drawer, Space, Typography } from 'antd'; 
import { Link } from 'react-router-dom'; 
import { navbarList } from './Navbar'; 

const { Title } = Typography;

const MenuDrawer = ({ setOpen, open }) => { 
    const onClose = () => { setOpen(false); };

    return ( 
        <> 
            <Drawer title={<Title level={3} style={{ color: '#1890ff', textAlign: 'center' }}>Меню</Title>} placement="right" onClose={onClose} open={open} width={300} bodyStyle={{ padding: '24px 0', backgroundColor: '#f0f2f5' }} closable={false} extra={<Button className='!text-whitea' type="link" onClick={onClose} style={{ color: '#1890ff' }}>Закрыть</Button>}> 
                <Space direction="vertical" size={20} style={{ width: '100%' }}> 
                    {navbarList?.map((item, index) => ( 
                        <Link key={index} to={item.path} style={{ display: 'flex', alignItems: 'center', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', color: '#000', transition: 'background-color 0.3s, color 0.3s' }} className="menu-link"> 
                            {item.title} 
                        </Link> 
                    ))} 
                </Space> 
            </Drawer> 
        </> 
    ); 
};

export default MenuDrawer;