import {memo} from 'react';

function Footer() {
  return (
    <span className="footerBy">
      Created by <a href={"https://github.com/kt-sec"}>Kemal Tarhan</a> - 2021
    </span>
  )
}

export default memo(Footer);
