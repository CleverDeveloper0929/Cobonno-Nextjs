import { useState } from 'react';
import dynamic from 'next/dynamic';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, IconButton, ClickAwayListener, BoxProps } from '@mui/material';

// third-party
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });
import { EmojiClickData, SkinTones } from 'emoji-picker-react';

// assets
import MoodTwoToneIcon from '@mui/icons-material/MoodTwoTone';

// ==============================|| EMOJI PICKER ||============================== //

const RootStyle = styled(Box)({
  position: 'relative'
});

const PickerStyle = styled('div')(({ theme }) => ({
  bottom: 40,
  overflow: 'hidden',
  position: 'absolute',
  left: -16,
  boxShadow: theme.customShadows.z20,
  borderRadius: 4,
  '& .emoji-mart': {
    border: 'none',
    backgroundColor: theme.palette.background.paper
  },
  '& .emoji-mart-anchor': {
    color: theme.palette.text.disabled,
    '&:hover, &:focus, &.emoji-mart-anchor-selected': {
      color: theme.palette.text.primary
    }
  },
  '& .emoji-mart-bar': { borderColor: theme.palette.divider },
  '& .emoji-mart-search input': {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    borderColor: theme.palette.grey[500],
    '&::placeholder': {
      ...theme.typography.body2,
      color: theme.palette.text.disabled
    }
  },
  '& .emoji-mart-search-icon svg': {
    opacity: 1,
    fill: theme.palette.text.disabled
  },
  '& .emoji-mart-category-label span': {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary
  },
  '& .emoji-mart-title-label': { color: theme.palette.text.primary },
  '& .emoji-mart-category .emoji-mart-emoji:hover:before': {
    backgroundColor: theme.palette.action.selected
  },
  '& .emoji-mart-emoji': { outline: 'none' },
  '& .emoji-mart-preview-name': {
    color: theme.palette.text.primary
  },
  '& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon': {
    color: theme.palette.text.secondary
  }
}));

interface EmoijPickerProps extends BoxProps {
  disabled?: boolean;
  value: string;
  setValue: (value: string) => void;
  alignRight?: boolean;
}

export default function EmojiPicker({ disabled, value, setValue, alignRight = false, ...other }: EmoijPickerProps) {
  const [emojiPickerState, SetEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    setValue(value + emojiObject.emoji);
  };

  let emojiPicker;
  if (emojiPickerState) {
    emojiPicker = (
      <>
        <Picker onEmojiClick={onEmojiClick} defaultSkinTone={SkinTones.DARK} autoFocusSearch={false} />
      </>
    );
  }

  const triggerPicker = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  };

  const handleClickAway = () => {
    SetEmojiPicker(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <RootStyle {...other}>
        <PickerStyle
          sx={{
            ...(alignRight && {
              right: -2,
              left: 'auto !important'
            })
          }}
        >
          {emojiPicker}
        </PickerStyle>
        <IconButton disabled={disabled} size="small" onClick={triggerPicker}>
          <MoodTwoToneIcon />
        </IconButton>
      </RootStyle>
    </ClickAwayListener>
  );
}
