import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7068087176885436442~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=351c689c&x-expires=1743836400&x-signature=zmZfd5U3xHVdK9YeWNzQfCeaClA%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Minh Phung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>NguyenMinhPhung</span>
            </div>
        </div>
    );
}

export default AcountItem;
