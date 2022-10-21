import { Avatar } from '@fluentui/react-components';
import { grandcanyon, tellepsen, strake, austin, dallas, philmont, texastech } from  '../images/images';


const Header = () => {
  return(
    <div className="header">
      <Avatar name="Grand Canyon - Rim to Rim" image={{src: grandcanyon}} size={28} />
      <Avatar name="Camp Tellepsen" image={{src: tellepsen}} size={28} />
      <Avatar name="Camp Strake" image={{src: strake}} size={28} />
      <Avatar name="Austin" image={{src: austin}} size={28} />
      <Avatar name="Dallas" image={{src: dallas}} size={28} />
      <Avatar name="Lubbock" image={{src: texastech}} size={28} />
      <Avatar name="Philmont" image={{src: philmont}} size={28} />
    </div>
  )
}

export default Header;
