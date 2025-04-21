import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2 className={cx('container')}>Sidebar</h2>
        </aside>
    );
}

export default Sidebar;
