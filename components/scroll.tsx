import React, { useRef } from 'react';
import {
  ScrollView,
  ScrollViewProps,
  Platform,
  ViewStyle,
} from 'react-native';

interface IProps extends ScrollViewProps {
  className?: string;
  style?: ViewStyle | ViewStyle[];
}

const ApScrollView: React.FC<IProps> = (props) => {
  const { children, className, style, ...rest } = props;
  const scrollViewRef = useRef<any>(null);

  const combinedClassName = `flex-grow w-full pb-10 ${className ?? ''}`;

  return (
    <>
      {Platform.OS === 'web' && (
        <style>
          {`
            /* This is what makes it to completely hide the scroll bar */
            *::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
            *::-webkit-scrollbar-thumb {
              background: transparent;
            }
            *::-webkit-scrollbar-track {
              background: transparent;
            }
            * {
              scrollbar-width: none !important;
              -ms-overflow-style: none !important; 
            }
          `}
        </style>
      )}

      <ScrollView
        ref={scrollViewRef}
        className={combinedClassName}
        style={[{ backgroundColor: 'transparent' }, style]}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
      >
        {children}
      </ScrollView>
    </>
  );
};

export default ApScrollView;

