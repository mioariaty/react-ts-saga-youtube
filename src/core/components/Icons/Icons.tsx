import React, { FC } from 'react';
import classNames from 'core/utils/classNames';
import withStyles, { WithStylesProps } from 'core/hocs/withStyles';
import { Helmet } from 'react-helmet';
import { LineAwesomeName } from './LineAwesomeName';
import { MaterialIconName } from './MaterialIconName';
import styles from './Icons.module.scss';

export interface IconProps extends WithStylesProps {
  /** #### Sự kiện khi bấm vào icon */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export interface LineAwesomeProps extends IconProps {
  /** #### Icon name */
  name: LineAwesomeName;
  /** #### Icon size */
  size?: number;
}

const LineAwesomeComponent: FC<LineAwesomeProps> = ({ name, className = '', size, style = {}, ...rest }) => {
  return (
    <>
      <i
        {...rest}
        style={{ ...style, ...(!!size ? { '--font-size': `${size}px` } : {}) }}
        className={classNames(`la la-${name}`, styles.container, className)}
      />
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" />
      </Helmet>
    </>
  );
};

export const LineAwesome = withStyles(LineAwesomeComponent);

export interface MaterialIconProps extends IconProps {
  /** #### Icon name */
  name: MaterialIconName;
  /** #### Icon size */
  size?: number;
  /** #### Icon type */
  type?: 'filled' | 'outlined';
}

const MaterialIconComponent: FC<MaterialIconProps> = ({ name, type = 'filled', className = '', size, style = {}, ...rest }) => {
  return (
    <>
      <i
        {...rest}
        style={{ ...style, ...(!!size ? { '--font-size': `${size}px` } : {}) }}
        className={classNames(`material-icons${type === 'filled' ? '' : '-outlined'}`, styles.container, className)}
      >
        {name}
      </i>
      <Helmet>
        {type === 'filled' ? (
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        ) : (
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        )}
      </Helmet>
    </>
  );
};
export const MaterialIcon = withStyles(MaterialIconComponent);
