const EnlargeIcon = ({ style, onClick }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" style={style} onClick={onClick}>
    <path fill="#0C0C0C" d="M.924.65h21.235v21.3H.924z" />
    <path
      fill="#fff"
      d="M19.076 5.087a.457.457 0 0 0-.457-.457l-4.115.007a.457.457 0 1 0 .001.914l3.658-.006.005 3.658a.457.457 0 0 0 .915-.002l-.007-4.114Zm-5.442 5.648 5.309-5.325-.648-.645-5.308 5.325.647.645ZM19.076 18.4a.457.457 0 0 1-.457.457l-4.115-.006a.457.457 0 0 1 .001-.915l3.658.006.005-3.658a.457.457 0 0 1 .915.002l-.007 4.115Zm-5.442-5.648 5.309 5.325-.648.646-5.308-5.325.647-.646ZM4.89 18.4c0 .253.206.458.458.457l4.115-.006a.457.457 0 0 0-.001-.915l-3.658.006-.006-3.658a.457.457 0 1 0-.914.002L4.89 18.4Zm5.442-5.648-5.308 5.325.647.646 5.309-5.325-.648-.646ZM4.89 5.087c0-.253.206-.457.458-.457l4.115.007a.457.457 0 1 1-.001.914l-3.658-.006-.006 3.658a.457.457 0 1 1-.914-.002l.006-4.114Zm5.442 5.648L5.024 5.41l.647-.645 5.309 5.325-.648.645Z"
    />
  </svg>
);
export default EnlargeIcon;