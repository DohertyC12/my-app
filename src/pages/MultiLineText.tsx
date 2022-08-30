import { TextField, Stack, IStackProps, IStackStyles, ThemeProvider, initializeIcons } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import React, { useCallback, useState } from 'react';

// Initialize icons in case this example uses them
initializeIcons();

const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const stackTokens = { childrenGap: 50 };
const dummyText: string = "dummy text here here here";
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

export const TextFieldMultilineExample: React.FunctionComponent = () => {
    const [multiline, { toggle: toggleMultiline }] = useBoolean(false);
    const [title, setTitle] = useState<string>('');

    const onChange = useCallback(
        (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newText: string | undefined): void => {
            setTitle(newText ? newText : '');
            const newMultiline = newText? (newText.length > 50)
                                : false;
            if (newMultiline !== multiline) {
                toggleMultiline();
            }
        },
        [title]
    )

    return (
        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
            <Stack {...columnProps}>
                <TextField label="Standard" multiline rows={3} />
                <TextField label="Disabled" multiline rows={3} disabled defaultValue={dummyText} />
                <TextField label="Non-resizable" multiline resizable={false} />
            </Stack>

            <Stack {...columnProps}>
                <TextField label="With auto adjusting height" multiline autoAdjustHeight />
                <TextField
                    label="Switches from single to multiline if more than 50 characters are entered"
                    multiline={multiline}
                    // eslint-disable-next-line react/jsx-no-bind
                    onChange={onChange}
                />
            </Stack>
        </Stack>
    );
};

export const TextFieldMultilineExampleWrapper = () => <ThemeProvider><TextFieldMultilineExample /></ThemeProvider>;