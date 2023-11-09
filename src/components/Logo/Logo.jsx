import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
const Logo = () => {
  return (
    <Link to="/">
      <svg
        className={styles.logo}
        viewBox="0 0 131 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="130" height="116" rx="15" fill="#CD9C8E" />
        <path
          d="M57.2071 25.2907C56.2767 26.4757 56.0998 27.0723 56.537 27.9883C56.9743 28.9044 58.8824 28.3255 60.5576 28.6628C62.2329 29 65.9185 37.4302 66.9236 44.1744C67.9288 50.9186 66.5886 47.2093 66.5886 47.2093L60.5576 36.7558L60.2226 47.5465L59.8875 48.8953L59.2174 72.5H54.5267L52.8515 51.593L48.1607 72.5H43.47L47.1556 48.8953C46.1504 47.5465 48.5533 40.1637 48.1607 36.0814C48.1607 36.0814 40.7896 47.8837 40.4546 47.8837H39.1446C39.0283 47.9407 38.9072 47.9427 38.7793 47.8837H39.1446C40.8502 47.0477 41.5095 34.3882 47.1556 29.3372C48.7203 27.9374 51.2298 29.2405 51.8463 28.3255C52.4629 27.4106 52.7221 26.929 52.5164 26.3023L51.8463 25.2907C51.0807 24.1164 50.5061 22.9302 51.5113 21.2442C52.3719 20.1172 53.4131 19.5714 54.8618 19.5581C56.3001 19.8649 57.2071 20.5683 57.5422 21.9186C57.914 23.4172 57.7531 24.1243 57.2071 25.2907Z"
          fill="#FFFAF7"
          stroke="#FFFAF7"
        />
        <path
          d="M17.3359 56.6542C17.3359 56.6542 22.7431 47.9353 25.7122 48.2245C25.7122 48.2245 26.7174 47.2126 26.0473 46.8757C25.3772 46.5388 24.2604 45.4153 24.372 44.178C24.5069 42.6827 25.6084 41.7483 27.3875 41.8176C28.9136 42.0521 29.3978 42.4923 29.7328 44.5152C30.0679 46.5382 27.5917 46.349 27.7225 46.8757L28.0576 48.2245C28.0576 48.2245 28.3926 48.8993 31.4081 48.2245C34.4236 47.5498 39.7113 47.3853 39.7844 47.8873L31.0731 50.9222L30.738 60.0269L32.4133 72.1664H30.0679L27.3875 62.7245L26.7174 72.1664H24.372L23.0318 51.9338C20.9036 54.2835 17.3359 56.6542 17.3359 56.6542Z"
          fill="#FFFAF7"
          stroke="#FFFAF7"
        />
        <path
          d="M100.384 46.5409C101.854 46.3915 96.9096 64.8724 97.7036 64.7502L100.049 65.4246V71.8316H101.724L103.064 65.4246H105.41L105.745 71.8316H107.749L108.135 65.0815L109.765 64.7502C109.181 58.4484 108.935 54.9086 108.76 48.5642L113.116 53.2851L113.78 53.2791L108.425 43.1688L106.415 42.8316L105.745 41.4828C106.984 40.3109 107.452 39.5815 107.755 38.1107L108.425 38.4479C108.638 42.6066 110.004 43.1764 112.446 44.1805C112.446 44.1805 109.765 37.4363 109.095 37.0991C108.425 36.7618 108.074 37.0991 107.42 37.0991C106.774 36.0936 106.044 35.1756 104.74 35.0758C102.984 34.9416 101.393 37.0991 101.389 38.1107C101.386 39.1223 101.386 39.4595 102.056 40.1339C102.726 40.8084 104.07 41.4828 104.07 41.4828C104.07 42.0095 103.951 42.0165 103.731 42.4944C103.287 43.4591 102.413 42.9656 101.386 43.1688C98.1112 43.8169 94.2161 46.3182 93.7278 46.5409C96.3297 46.5426 98.9229 46.6895 100.384 46.5409Z"
          fill="#FFFAF7"
        />
        <path
          d="M93.7278 46.5409C94.2161 46.3182 98.1112 43.8169 101.386 43.1688C102.413 42.9656 103.287 43.4591 103.731 42.4944C103.951 42.0165 104.07 42.0095 104.07 41.4828C104.07 41.4828 102.726 40.8084 102.056 40.1339C101.386 39.4595 101.386 39.1223 101.389 38.1107C101.393 37.0991 102.984 34.9416 104.74 35.0758C106.044 35.1756 106.774 36.0936 107.42 37.0991C108.074 37.0991 108.425 36.7618 109.095 37.0991C109.765 37.4363 112.446 44.1805 112.446 44.1805C110.004 43.1764 108.638 42.6066 108.425 38.4479L107.755 38.1107C107.452 39.5815 106.984 40.3109 105.745 41.4828L106.415 42.8316L108.425 43.1688L113.78 53.2791L113.116 53.2851L108.76 48.5642C108.935 54.9085 109.181 58.4484 109.765 64.7502L108.135 65.0815L107.749 71.8316H105.745L105.41 65.4246H103.064L101.724 71.8316H100.049V65.4246L97.7036 64.7502C96.9096 64.8724 101.854 46.3915 100.384 46.5409C98.9229 46.6895 96.3297 46.5426 93.7278 46.5409ZM93.7278 46.5409C93.7129 46.5409 93.749 46.5409 93.7341 46.5409C93.7177 46.5627 93.6826 46.5616 93.7278 46.5409Z"
          stroke="#FFFAF7"
        />
        <path
          d="M78.6506 29.337L74.63 28.6626C74.9731 23.247 77.3104 20.9068 79.9908 20.9067C82.6713 20.9067 84.9512 23.3456 85.0166 28.6626L81.6661 29.337V30.3486C81.6661 30.3486 80.6609 30.828 82.0011 30.828C89.8965 30.828 94.1989 46.0508 93.728 46.8719L85.0166 36.7556L89.3723 62.3835H86.0218V72.1626H83.3414L82.0011 62.3835H78.6506L77.3104 72.1626H74.63V62.3835H72.2847L74.63 37.7672L66.9238 47.2091C68.6685 39.8847 73.2898 31.3602 75.6352 31.023C77.9805 30.6858 78.6506 30.6858 78.6506 30.6858V29.337Z"
          fill="#FFFAF7"
          stroke="#FFFAF7"
        />
        <g clipPath="url(#clip0_87_383)">
          <path
            d="M82.3366 41.5864C81.3314 41.5864 80.8257 42.0227 80.3263 42.5981C79.8268 42.0227 79.3211 41.5864 78.316 41.5864C77.3108 41.5864 76.3057 42.2614 76.3057 44.2846C76.3057 45.2963 77.3108 47.3195 80.3263 49.0061C83.3417 47.3195 84.3469 45.2963 84.3469 44.2846C84.3469 42.2614 83.3417 41.5864 82.3366 41.5864Z"
            fill="#BC0000"
          />
        </g>
        <path
          d="M21.6608 92.8371H25.9928V93.8691H21.6608V92.8371ZM21.7808 97.2651H20.5808V88.8651H26.5088V89.9091H21.7808V97.2651ZM26.5393 97.2651L30.3433 88.8651H31.5313L35.3473 97.2651H34.0873L30.6913 89.5371H31.1713L27.7753 97.2651H26.5393ZM28.1593 95.1651L28.4833 94.2051H33.2113L33.5593 95.1651H28.1593ZM36.6003 97.2651V88.8651H37.5843L41.3523 95.2131H40.8243L44.5443 88.8651H45.5283L45.5403 97.2651H44.3883L44.3763 90.6771H44.6523L41.3403 96.2451H40.7883L37.4523 90.6771H37.7523V97.2651H36.6003ZM48.0613 97.2651V88.8651H49.2613V97.2651H48.0613ZM51.7761 97.2651V88.8651H52.9761V96.2211H57.5241V97.2651H51.7761ZM60.0502 97.2651V94.0491L60.3262 94.7931L56.7142 88.8651H57.9982L61.0342 93.8691H60.3382L63.3862 88.8651H64.5742L60.9742 94.7931L61.2382 94.0491V97.2651H60.0502ZM72.7704 97.3611C72.1304 97.3611 71.5384 97.2571 70.9944 97.0491C70.4584 96.8331 69.9904 96.5331 69.5904 96.1491C69.1984 95.7571 68.8904 95.3011 68.6664 94.7811C68.4424 94.2611 68.3304 93.6891 68.3304 93.0651C68.3304 92.4411 68.4424 91.8691 68.6664 91.3491C68.8904 90.8291 69.2024 90.3771 69.6024 89.9931C70.0024 89.6011 70.4704 89.3011 71.0064 89.0931C71.5504 88.8771 72.1424 88.7691 72.7824 88.7691C73.4304 88.7691 74.0264 88.8811 74.5704 89.1051C75.1224 89.3211 75.5904 89.6451 75.9744 90.0771L75.1944 90.8331C74.8744 90.4971 74.5144 90.2491 74.1144 90.0891C73.7144 89.9211 73.2864 89.8371 72.8304 89.8371C72.3584 89.8371 71.9184 89.9171 71.5104 90.0771C71.1104 90.2371 70.7624 90.4611 70.4664 90.7491C70.1704 91.0371 69.9384 91.3811 69.7704 91.7811C69.6104 92.1731 69.5304 92.6011 69.5304 93.0651C69.5304 93.5291 69.6104 93.9611 69.7704 94.3611C69.9384 94.7531 70.1704 95.0931 70.4664 95.3811C70.7624 95.6691 71.1104 95.8931 71.5104 96.0531C71.9184 96.2131 72.3584 96.2931 72.8304 96.2931C73.2864 96.2931 73.7144 96.2131 74.1144 96.0531C74.5144 95.8851 74.8744 95.6291 75.1944 95.2851L75.9744 96.0411C75.5904 96.4731 75.1224 96.8011 74.5704 97.0251C74.0264 97.2491 73.4264 97.3611 72.7704 97.3611ZM81.3025 97.3611C80.6625 97.3611 80.0665 97.2531 79.5145 97.0371C78.9705 96.8211 78.4985 96.5211 78.0985 96.1371C77.6985 95.7451 77.3865 95.2891 77.1625 94.7691C76.9385 94.2491 76.8265 93.6811 76.8265 93.0651C76.8265 92.4491 76.9385 91.8811 77.1625 91.3611C77.3865 90.8411 77.6985 90.3891 78.0985 90.0051C78.4985 89.6131 78.9705 89.3091 79.5145 89.0931C80.0585 88.8771 80.6545 88.7691 81.3025 88.7691C81.9425 88.7691 82.5305 88.8771 83.0665 89.0931C83.6105 89.3011 84.0825 89.6011 84.4825 89.9931C84.8905 90.3771 85.2025 90.8291 85.4185 91.3491C85.6425 91.8691 85.7545 92.4411 85.7545 93.0651C85.7545 93.6891 85.6425 94.2611 85.4185 94.7811C85.2025 95.3011 84.8905 95.7571 84.4825 96.1491C84.0825 96.5331 83.6105 96.8331 83.0665 97.0491C82.5305 97.2571 81.9425 97.3611 81.3025 97.3611ZM81.3025 96.2931C81.7665 96.2931 82.1945 96.2131 82.5865 96.0531C82.9865 95.8931 83.3305 95.6691 83.6185 95.3811C83.9145 95.0851 84.1425 94.7411 84.3025 94.3491C84.4705 93.9571 84.5545 93.5291 84.5545 93.0651C84.5545 92.6011 84.4705 92.1731 84.3025 91.7811C84.1425 91.3891 83.9145 91.0491 83.6185 90.7611C83.3305 90.4651 82.9865 90.2371 82.5865 90.0771C82.1945 89.9171 81.7665 89.8371 81.3025 89.8371C80.8305 89.8371 80.3945 89.9171 79.9945 90.0771C79.6025 90.2371 79.2585 90.4651 78.9625 90.7611C78.6665 91.0491 78.4345 91.3891 78.2665 91.7811C78.1065 92.1731 78.0265 92.6011 78.0265 93.0651C78.0265 93.5291 78.1065 93.9571 78.2665 94.3491C78.4345 94.7411 78.6665 95.0851 78.9625 95.3811C79.2585 95.6691 79.6025 95.8931 79.9945 96.0531C80.3945 96.2131 80.8305 96.2931 81.3025 96.2931ZM86.1994 97.2651L90.0034 88.8651H91.1914L95.0074 97.2651H93.7474L90.3514 89.5371H90.8314L87.4354 97.2651H86.1994ZM87.8194 95.1651L88.1434 94.2051H92.8714L93.2194 95.1651H87.8194ZM99.8993 97.3611C99.2593 97.3611 98.6673 97.2571 98.1233 97.0491C97.5873 96.8331 97.1193 96.5331 96.7193 96.1491C96.3273 95.7571 96.0193 95.3011 95.7953 94.7811C95.5713 94.2611 95.4593 93.6891 95.4593 93.0651C95.4593 92.4411 95.5713 91.8691 95.7953 91.3491C96.0193 90.8291 96.3313 90.3771 96.7313 89.9931C97.1313 89.6011 97.5993 89.3011 98.1353 89.0931C98.6793 88.8771 99.2713 88.7691 99.9113 88.7691C100.559 88.7691 101.155 88.8811 101.699 89.1051C102.251 89.3211 102.719 89.6451 103.103 90.0771L102.323 90.8331C102.003 90.4971 101.643 90.2491 101.243 90.0891C100.843 89.9211 100.415 89.8371 99.9593 89.8371C99.4873 89.8371 99.0473 89.9171 98.6393 90.0771C98.2393 90.2371 97.8913 90.4611 97.5953 90.7491C97.2993 91.0371 97.0673 91.3811 96.8993 91.7811C96.7393 92.1731 96.6593 92.6011 96.6593 93.0651C96.6593 93.5291 96.7393 93.9611 96.8993 94.3611C97.0673 94.7531 97.2993 95.0931 97.5953 95.3811C97.8913 95.6691 98.2393 95.8931 98.6393 96.0531C99.0473 96.2131 99.4873 96.2931 99.9593 96.2931C100.415 96.2931 100.843 96.2131 101.243 96.0531C101.643 95.8851 102.003 95.6291 102.323 95.2851L103.103 96.0411C102.719 96.4731 102.251 96.8011 101.699 97.0251C101.155 97.2491 100.555 97.3611 99.8993 97.3611ZM110.839 88.8651H112.039V97.2651H110.839V88.8651ZM106.015 97.2651H104.815V88.8651H106.015V97.2651ZM110.947 93.5211H105.895V92.4771H110.947V93.5211Z"
          fill="#FFFBF8"
        />
        <defs>
          <clipPath id="clip0_87_383">
            <rect
              width="8.04124"
              height="8.09302"
              fill="white"
              transform="translate(76.3057 41.1392)"
            />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};

export default Logo;
