import {extendTheme} from 'native-base';

interface UIColor {
  'color-primary-100': string;
  'color-primary-200': string;
  'color-primary-300': string;
  'color-primary-400': string;
  'color-primary-500': string;
  'color-primary-600': string;
  'color-primary-700': string;
  'color-primary-800': string;
  'color-primary-900': string;

  'color-warning-100': string;
  'color-warning-200': string;
  'color-warning-300': string;
  'color-warning-400': string;
  'color-warning-500': string;
  'color-warning-600': string;
  'color-warning-700': string;
  'color-warning-800': string;
  'color-warning-900': string;

  'color-success-100': string;
  'color-success-200': string;
  'color-success-300': string;
  'color-success-400': string;
  'color-success-500': string;
  'color-success-600': string;
  'color-success-700': string;
  'color-success-800': string;
  'color-success-900': string;

  'color-info-100': string;
  'color-info-200': string;
  'color-info-300': string;
  'color-info-400': string;
  'color-info-500': string;
  'color-info-600': string;
  'color-info-700': string;
  'color-info-800': string;
  'color-info-900': string;

  'color-danger-100': string;
  'color-danger-200': string;
  'color-danger-300': string;
  'color-danger-400': string;
  'color-danger-500': string;
  'color-danger-600': string;
  'color-danger-700': string;
  'color-danger-800': string;
  'color-danger-900': string;

  'color-basic-100': string;
  'color-basic-200': string;
  'color-basic-300': string;
  'color-basic-400': string;
  'color-basic-500': string;
  'color-basic-600': string;
  'color-basic-700': string;
  'color-basic-800': string;
  'color-basic-900': string;

  'color-background-100': string;
  'color-background-200': string;
  'color-background-300': string;
  'color-background-400': string;
  'color-border-100': string;

  'color-teal-500': string;
  'color-pink-500': string;
  'color-purple-500': string;
  'color-yellow-500': string;
}

const Color: UIColor = {
  'color-primary-100': '#DEDDFC',
  'color-primary-200': '#BEBCFA',
  'color-primary-300': '#9A97F2',
  'color-primary-400': '#7D7AE5',
  'color-primary-500': '#5450D4',
  'color-primary-600': '#3D3AB6',
  'color-primary-700': '#2B2898',
  'color-primary-800': '#1B197A',
  'color-primary-900': '#100F65',

  'color-success-100': '#ECFCE1',
  'color-success-200': '#D5FAC4',
  'color-success-300': '#B6F1A3',
  'color-success-400': '#96E388',
  'color-success-500': '#69D161',
  'color-success-600': '#46B348',
  'color-success-700': '#30963A',
  'color-success-800': '#1E792E',
  'color-success-900': '#126427',

  'color-info-100': '#D5E8FF',
  'color-info-200': '#ACD0FF',
  'color-info-300': '#83B4FF',
  'color-info-400': '#649CFF',
  'color-info-500': '#3175FF',
  'color-info-600': '#235ADB',
  'color-info-700': '#1842B7',
  'color-info-800': '#0F2D93',
  'color-info-900': '#091F7A',

  'color-warning-100': '#FEF5D6',
  'color-warning-200': '#FEE8AD',
  'color-warning-300': '#FDD784',
  'color-warning-400': '#FBC765',
  'color-warning-500': '#FAAC33',
  'color-warning-600': '#D78A25',
  'color-warning-700': '#B36B19',
  'color-warning-800': '#904F10',
  'color-warning-900': '#773B09',

  'color-danger-100': '#FEECDC',
  'color-danger-200': '#FDD4BB',
  'color-danger-300': '#FAB598',
  'color-danger-400': '#F6977D',
  'color-danger-500': '#F06953',
  'color-danger-600': '#CE453C',
  'color-danger-700': '#AC292C',
  'color-danger-800': '#8B1A25',
  'color-danger-900': '#730F21',

  'color-basic-100': '#F7FAFC',
  'color-basic-200': '#EDF2F7',
  'color-basic-300': '#E2E8F0',
  'color-basic-400': '#CBD5E0',
  'color-basic-500': '#A0AEC0',
  'color-basic-600': '#718096',
  'color-basic-700': '#4A5568',
  'color-basic-800': '#2D3748',
  'color-basic-900': '#171923',

  'color-background-100': '#F7FAFC',
  'color-background-200': '#F1F6FA',
  'color-background-300': '#E2E8F0',
  'color-background-400': '#DBE4EC',
  'color-border-100': '#E2E8F0',

  // ピンポイントカラー
  'color-teal-500': '#38B2AC',
  'color-pink-500': '#ED64A6',
  'color-purple-500': '#9F7AEA',
  'color-yellow-500': '#ECC94B',
};

const AppTheme = extendTheme({
  components: {
    Text: {
      variants: {
        h1: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: '4xl',
          lineHeight: '1.5rem',
        },
        h2: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: '3xl',
          lineHeight: '1.5rem',
        },
        h3: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: '2xl',
          lineHeight: '1.5rem',
        },
        h4: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: 'xl',
          lineHeight: '1.5rem',
        },
        h5: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: 'lg',
          lineHeight: '1.5rem',
        },
        h6: {
          color: Color['color-basic-900'],
          fontWeight: 700,
          fontSize: 'md',
          lineHeight: '1.5rem',
        },
        subtitle1: {
          color: Color['color-basic-800'],
          fontWeight: 500,
          fontSize: 'xl',
          lineHeight: '1.5rem',
        },
        subtitle2: {
          color: Color['color-basic-800'],
          fontWeight: 500,
          fontSize: 'lg',
          lineHeight: '1.5rem',
        },
        body1: {
          color: Color['color-basic-800'],
          fontWeight: 400,
          fontSize: 'lg',
          lineHeight: '1.5rem',
        },
        body2: {
          color: Color['color-basic-800'],
          fontWeight: 400,
          fontSize: 'md',
          lineHeight: '1.5rem',
        },
        caption: {
          color: Color['color-basic-700'],
          fontWeight: 400,
          fontSize: 'sm',
          lineHeight: '1.5rem',
        },
      },
    },
  },
});

export {AppTheme, Color};
export type {UIColor};
