import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

import { COLORS } from '~/app/common/style';

const RightArrow = ({ ...props }: SvgProps) => {
  return (
    <Svg width={8.574} height={15} viewBox="0 0 8.574 15" {...props}>
      <Path
        d="M8.567 7.626a1.071 1.071 0 01-.31.636l-6.426 6.426a1.074 1.074 0 01-1.514-1.523L5.982 7.5.312 1.836A1.074 1.074 0 011.826.313l6.426 6.426a1.071 1.071 0 01.31.887z"
        fill={COLORS.TEXT_MAIN}
      />
    </Svg>
  );
};

export default RightArrow;
