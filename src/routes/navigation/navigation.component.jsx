import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <div className='nav-links'>
                        <Link className='nav-link' to='/login'>
                            LOGIN
                        </Link>
                    </div>
                    <div className='nav-links'>
                        <Link className='nav-link' to='/register'>
                            REGISTER
                        </Link>
                    </div>
                    <div className='nav-links'>
                        <Link className='nav-link' to='/shop'>
                            SHOP
                        </Link>
                    </div>
                    <div className='nav-links'>
                        <Link className='nav-link' to='/premium'>
                            PREMIUM
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>)
}

export default Navigation;