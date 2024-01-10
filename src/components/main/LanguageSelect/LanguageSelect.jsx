import { useLanguageContext } from '@/context/LanguageContext';


const LanguageSelect = () => {

  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <select
      style={{
        width: 200,
        position: 'absolute',
        top: 10,
        right: 10,
        height: '40px',
        zIndex: 10000,
      }}
      onChange={onClickLanguageChange}
    >
      {Object.keys(languages).map(lng => (
        <option key={languages[lng].nativeName} value={lng}>
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
