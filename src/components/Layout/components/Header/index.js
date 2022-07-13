import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a>
                        <div>
                            <img src={images.logo} alt="GBoss logo"></img>
                        </div>
                    </a>
                </div>
                <div className={cx('option')}>
                    <div className={cx('job')}>
                        <button>
                            waiting-list-icon-id
                            <span>waiting-list-icon-id</span>
                        </button>
                        <button>
                            <span>new-notify-booking-icon</span>
                        </button>
                        <button>
                            <span>new-notify-booking-icon</span>
                        </button>
                        <button>
                            <span>notify-icon-id</span>
                        </button>
                    </div>
                    <div className={cx('avatar')}>Long Kiều</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
