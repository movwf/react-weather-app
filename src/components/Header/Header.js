import {memo} from 'react';

function Header() {
  return (
        <div className="titleDiv">
          <span className="headTitle">Weather Boy</span>
        </div>
  )
}

export default memo(Header);
