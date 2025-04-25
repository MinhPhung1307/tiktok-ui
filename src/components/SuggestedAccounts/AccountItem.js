import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4739aabe3ec36e53c45487b75714a762~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=3d2a6520&x-expires=1745654400&x-signature=PcXTUED%2F78L06XBDrOkDqtLWhcI%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
            </div>
        </div>
    );
}

export default AccountItem;
