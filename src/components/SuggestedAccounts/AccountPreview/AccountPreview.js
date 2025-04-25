import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4739aabe3ec36e53c45487b75714a762~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=3d2a6520&x-expires=1745654400&x-signature=PcXTUED%2F78L06XBDrOkDqtLWhcI%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=my"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Theanh28 Entertainment</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>12.9M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>1.6B</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
