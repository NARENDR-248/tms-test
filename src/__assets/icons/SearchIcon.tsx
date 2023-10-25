import { FC } from "react";

interface Props {
  color: string;
}
const SearchIcon: FC<Props> = (props) => {
  const { color } = props;
  return (
    <svg width="16" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1390_24421)">
        <path
          d="M18.2935 18.815L16.6305 17.152M9.56254 17.9835C10.5999 17.9835 11.6271 17.7792 12.5855 17.3822C13.5439 16.9852 14.4148 16.4033 15.1483 15.6698C15.8818 14.9363 16.4637 14.0654 16.8607 13.107C17.2577 12.1486 17.462 11.1214 17.462 10.084C17.462 9.04668 17.2577 8.01946 16.8607 7.06106C16.4637 6.10265 15.8818 5.23182 15.1483 4.49829C14.4148 3.76476 13.5439 3.18289 12.5855 2.7859C11.6271 2.38892 10.5999 2.18459 9.56254 2.18459C7.46748 2.18459 5.45822 3.01685 3.97678 4.49829C2.49535 5.97973 1.66309 7.98898 1.66309 10.084C1.66309 12.1791 2.49535 14.1884 3.97678 15.6698C5.45822 17.1512 7.46748 17.9835 9.56254 17.9835Z"
          stroke={color}
          strokeWidth="1.76087"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1390_24421">
          <rect width="19.9565" height="19.9565" fill="white" transform="translate(0 0.521973)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SearchIcon;
