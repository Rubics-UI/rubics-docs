export interface ComponentDemo {
  slug: string
  name: string
  description: string
  category: 'form' | 'display' | 'navigation' | 'feedback'
  installCommand: string
  previewBg?: string
  iphoneDemo: {
    screenTitle: string
    screenBg: string
    elements: DemoElement[]
  }
  props: {
    name: string
    type: string
    default?: string
    description: string
  }[]
  usage: {
    label: string
    code: string
  }[]
  npmDeps?: string[]
}

export interface DemoElement {
  type: 'button' | 'input' | 'checkbox' | 'slider' | 'otp' | 'text' | 'spacer' | 'carousel' | 'combobox' | 'date-picker' | 'login-card' | 'progress' | 'radio-group' | 'range-slider' | 'select-card' | 'sidebar' | 'skeleton'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>
}

export const components: ComponentDemo[] = [
  {
    slug: 'button',
    name: 'Button',
    description: 'A pressable component with multiple variants and sizes.',
    category: 'form',
    installCommand: 'rubics add button',
    iphoneDemo: {
      screenTitle: 'Button Demo',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Variants', style: 'section' } },
        { type: 'button', props: { variant: 'default', label: 'Default Button' } },
        { type: 'spacer' },
        { type: 'button', props: { variant: 'outline', label: 'Outline Button' } },
        { type: 'spacer' },
        { type: 'button', props: { variant: 'ghost', label: 'Ghost Button' } },
        { type: 'spacer' },
        { type: 'button', props: { variant: 'destructive', label: 'Destructive' } },
      ]
    },
    props: [
      { name: 'variant', type: '"default" | "outline" | "ghost" | "destructive"', default: '"default"', description: 'Visual style of the button' },
      { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the button' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Shows loading spinner' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
      { name: 'onPress', type: '() => void', description: 'Press handler' },
    ],
    usage: [
      { label: 'Default', code: '<Button onPress={() => {}}>\n  Click Me\n</Button>' },
      { label: 'Outline', code: '<Button variant="outline">\n  Outline\n</Button>' },
      { label: 'Loading', code: '<Button loading>\n  Loading\n</Button>' },
    ]
  },
  {
    slug: 'input',
    name: 'Input',
    description: 'A text input with label, error state, and disabled support.',
    category: 'form',
    installCommand: 'rubics add input',
    iphoneDemo: {
      screenTitle: 'Form',
      screenBg: '#09090b',
      elements: [
        { type: 'input', props: { label: 'Email', placeholder: 'you@example.com' } },
        { type: 'spacer' },
        { type: 'input', props: { label: 'Password', placeholder: '••••••••', secure: true } },
        { type: 'spacer' },
        { type: 'input', props: { label: 'Username', placeholder: 'johndoe', error: 'Already taken' } },
      ]
    },
    props: [
      { name: 'label', type: 'string', description: 'Label above input' },
      { name: 'error', type: 'string', description: 'Error message below input' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
      { name: 'placeholder', type: 'string', description: 'Placeholder text' },
    ],
    usage: [
      { label: 'Basic', code: '<Input placeholder="Enter text" />' },
      { label: 'With Label', code: '<Input label="Email" placeholder="you@example.com" />' },
      { label: 'With Error', code: '<Input label="Email" error="Invalid email" />' },
    ]
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    description: 'A toggleable checkbox with optional label.',
    category: 'form',
    installCommand: 'rubics add checkbox',
    iphoneDemo: {
      screenTitle: 'Settings',
      screenBg: '#09090b',
      elements: [
        { type: 'checkbox', props: { label: 'Enable notifications', checked: true } },
        { type: 'spacer' },
        { type: 'checkbox', props: { label: 'Dark mode', checked: false } },
        { type: 'spacer' },
        { type: 'checkbox', props: { label: 'Auto-update', checked: true } },
        { type: 'spacer' },
        { type: 'checkbox', props: { label: 'Analytics (disabled)', checked: false, disabled: true } },
      ]
    },
    props: [
      { name: 'checked', type: 'boolean', default: 'false', description: 'Checked state' },
      { name: 'onCheckedChange', type: '(val: boolean) => void', description: 'Toggle handler' },
      { name: 'label', type: 'string', description: 'Label text' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
    ],
    usage: [
      { label: 'Basic', code: '<Checkbox checked={checked} onCheckedChange={setChecked} />' },
      { label: 'With Label', code: '<Checkbox label="Accept terms" checked={checked} onCheckedChange={setChecked} />' },
    ]
  },
  {
    slug: 'otp',
    name: 'OTP Input',
    description: 'A digit-by-digit OTP input field.',
    category: 'form',
    installCommand: 'rubics add otp',
    iphoneDemo: {
      screenTitle: 'Verify',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Enter the 6-digit code', style: 'body' } },
        { type: 'spacer' },
        { type: 'otp', props: { length: 6, value: '4 2 1' } },
      ]
    },
    props: [
      { name: 'length', type: 'number', default: '6', description: 'Number of digits' },
      { name: 'value', type: 'string', description: 'Controlled value' },
      { name: 'onComplete', type: '(code: string) => void', description: 'Fires when all digits filled' },
    ],
    usage: [
      { label: '6-digit', code: '<OTPInput length={6} onComplete={(code) => verify(code)} />' },
      { label: '4-digit PIN', code: '<OTPInput length={4} onComplete={(pin) => checkPin(pin)} />' },
    ]
  },
  {
    slug: 'slider',
    name: 'Slider',
    description: 'A draggable range slider with step, labels, and custom colors.',
    category: 'form',
    installCommand: 'rubics add slider',
    npmDeps: ['react-native-reanimated', 'react-native-gesture-handler'],
    iphoneDemo: {
      screenTitle: 'Settings',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Volume', style: 'section' } },
        { type: 'slider', props: { value: 70, startLabel: '0', endLabel: '100' } },
        { type: 'spacer' },
        { type: 'text', props: { label: 'Brightness', style: 'section' } },
        { type: 'slider', props: { value: 40, rangeColor: '#6366f1' } },
      ]
    },
    props: [
      { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
      { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
      { name: 'step', type: 'number', default: '1', description: 'Snap increment' },
      { name: 'value', type: 'number', description: 'Controlled value' },
      { name: 'startLabel', type: 'string', description: 'Left label' },
      { name: 'endLabel', type: 'string', description: 'Right label' },
      { name: 'trackColor', type: 'string', default: '#e2e8f0', description: 'Track background' },
      { name: 'rangeColor', type: 'string', default: '#0f172a', description: 'Filled range color' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction' },
    ],
    usage: [
      { label: 'Basic', code: '<Slider value={50} onValueChange={setValue} />' },
      { label: 'With Labels', code: '<Slider min={0} max={100} startLabel="0%" endLabel="100%" value={val} onValueChange={setVal} />' },
    ]
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    description: 'A swipeable image carousel with pagination dots.',
    category: 'display',
    installCommand: 'rubics add carousel',
    iphoneDemo: {
      screenTitle: 'Gallery',
      screenBg: '#09090b',
      elements: [
        { type: 'carousel' }
      ]
    },
    props: [
      { name: 'data', type: 'ImageSourcePropType[]', description: 'Array of images to display.' },
      { name: 'width', type: 'number', description: 'Width of the carousel. Defaults to the screen width.' },
      { name: 'height', type: 'number', description: 'Height of the images. Defaults to 220.' },
      { name: 'showDots', type: 'boolean', description: 'Whether to show the pagination dots below the carousel. Defaults to true.' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Custom styles for the wrapper container.' },
      { name: 'imageStyle', type: 'StyleProp<ImageStyle>', description: 'Custom styles for the individual images.' }
    ],
    usage: [
      { label: 'Basic', code: '<Carousel data={[{ uri: "https://example.com/image.jpg" }]} />' }
    ]
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    description: 'A searchable dropdown for selecting among options.',
    category: 'form',
    installCommand: 'rubics add combobox',
    iphoneDemo: {
      screenTitle: 'Select Option',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Framework', style: 'section' } },
        { type: 'combobox' },
        { type: 'spacer' },
        { type: 'text', props: { label: 'Language', style: 'section' } },
        { type: 'combobox' }
      ]
    },
    props: [
      { name: 'options', type: 'ComboboxOption[]', description: 'Array of available options' },
      { name: 'value', type: 'string', description: 'Currently selected value string' },
      { name: 'onValueChange', type: '(value: string) => void', description: 'Triggered when the user taps on an item' },
      { name: 'placeholder', type: 'string', description: 'Text shown dynamically inside the input box when no item is selected or user is not searching' },
      { name: 'emptyText', type: 'string', description: 'Label to show when filtering returns empty matches' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Styling for Combobox' }
    ],
    usage: [
      { label: 'Basic', code: '<Combobox options={[{ label: "React", value: "react" }]} value={value} onValueChange={setValue} />' }
    ]
  },
  {
    slug: 'date-picker',
    name: 'Date Picker',
    description: 'A customizable date picker with calendar interaction.',
    category: 'form',
    installCommand: 'rubics add date-picker',
    iphoneDemo: {
      screenTitle: 'Schedule',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Pick a date', style: 'section' } },
        { type: 'date-picker' }
      ]
    },
    props: [
      { name: 'value', type: 'Date', description: 'The currently selected Date object' },
      { name: 'onValueChange', type: '(date: Date) => void', description: 'Callback fired when a date is selected' },
      { name: 'placeholder', type: 'string', description: 'Text to show when no date is selected. Default: "Pick a date"' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Styles for the DatePicker' }
    ],
    usage: [
      { label: 'Basic', code: '<DatePicker value={date} onValueChange={setDate} />' }
    ]
  },
  {
    slug: 'login-card',
    name: 'Login Card',
    description: 'A styled card component to structure authentication forms.',
    category: 'display',
    installCommand: 'rubics add login-card',
    iphoneDemo: {
      screenTitle: 'Welcome',
      screenBg: '#09090b',
      elements: [
        { type: 'login-card' }
      ]
    },
    props: [
      { name: 'children', type: 'React.ReactNode', description: 'Content of the login card' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Styles applied to the container' }
    ],
    usage: [
      { label: 'Basic', code: '<LoginCard>\n  <LoginCardHeader title="Login" />\n  <Input label="Email" />\n</LoginCard>' }
    ]
  },
  {
    slug: 'progress',
    name: 'Progress',
    description: 'Displays a progress bar with a customizable percentage.',
    category: 'feedback',
    installCommand: 'rubics add progress',
    iphoneDemo: {
      screenTitle: 'Loading',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Downloading...', style: 'section' } },
        { type: 'spacer' },
        { type: 'progress', props: { value: 65 } },
        { type: 'spacer' },
        { type: 'text', props: { label: 'Verification', style: 'section' } },
        { type: 'spacer' },
        { type: 'progress', props: { value: 30 } }
      ]
    },
    props: [
      { name: 'value', type: 'number', description: 'The progress value from 0 to 100' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Custom styles for the background track' },
      { name: 'indicatorStyle', type: 'StyleProp<ViewStyle>', description: 'Custom styles for the filled indicator' }
    ],
    usage: [
      { label: 'Basic', code: '<Progress value={50} />' }
    ]
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    description: 'A set of checkable buttons, mutually exclusive.',
    category: 'form',
    installCommand: 'rubics add radio-group',
    iphoneDemo: {
      screenTitle: 'Preferences',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Notify me via', style: 'section' } },
        { type: 'radio-group' }
      ]
    },
    props: [
      { name: 'options', type: 'RadioOption[]', description: 'Set of available radio buttons' },
      { name: 'value', type: 'string', description: 'Selected value' },
      { name: 'onChange', type: '(value: string) => void', description: 'Called on radio switch' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Styles applied to group' }
    ],
    usage: [
      { label: 'Basic', code: '<RadioGroup options={[{ label: "Email", value: "email" }]} value={val} onChange={setVal} />' }
    ]
  },
  {
    slug: 'range-slider',
    name: 'Range Slider',
    description: 'A powerful double-slider for selecting numeric ranges.',
    category: 'form',
    installCommand: 'rubics add range-slider',
    npmDeps: ['react-native-reanimated', 'react-native-gesture-handler'],
    iphoneDemo: {
      screenTitle: 'Filters',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Price Range', style: 'section' } },
        { type: 'range-slider', props: { value: [20, 80] } }
      ]
    },
    props: [
      { name: 'min', type: 'number', description: 'Minimum bounds' },
      { name: 'max', type: 'number', description: 'Maximum bounds' },
      { name: 'value', type: '[number, number]', description: 'The range values' },
      { name: 'onValueChange', type: '(value: [number, number]) => void', description: 'Value changer' }
    ],
    usage: [
      { label: 'Basic', code: '<RangeSlider value={[10, 50]} onValueChange={setRange} />' }
    ]
  },
  {
    slug: 'select-card',
    name: 'Select Card',
    description: 'Card-based mutually exclusive choices.',
    category: 'form',
    installCommand: 'rubics add select-card',
    iphoneDemo: {
      screenTitle: 'Plan',
      screenBg: '#09090b',
      elements: [
        { type: 'text', props: { label: 'Choose a Plan', style: 'section' } },
        { type: 'select-card' }
      ]
    },
    props: [
      { name: 'value', type: 'string', description: 'Selected card value' },
      { name: 'onValueChange', type: '(value: string) => void', description: 'Called on selection change' },
      { name: 'disabled', type: 'boolean', description: 'Disables all cards in group' }
    ],
    usage: [
      { label: 'Basic', code: '<SelectCardGroup value={val} onValueChange={setVal}>\n  <SelectCard value="pro" title="Pro" />\n</SelectCardGroup>' }
    ]
  },
  {
    slug: 'sidebar',
    name: 'Sidebar',
    description: 'A side-panel layout mechanism for primary navigation.',
    category: 'navigation',
    installCommand: 'rubics add sidebar',
    iphoneDemo: {
      screenTitle: 'Navigation',
      screenBg: '#09090b',
      elements: [
        { type: 'sidebar' }
      ]
    },
    props: [
      { name: 'width', type: 'number', description: 'Width of the sidebar' },
      { name: 'children', type: 'ReactNode', description: 'Sidebar internal content' }
    ],
    usage: [
      { label: 'Basic', code: '<Sidebar>\n  <SidebarGroup title="Menu">\n    <SidebarButton title="Home" />\n  </SidebarGroup>\n</Sidebar>' }
    ]
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    description: 'Loading placeholder with fading animation.',
    category: 'feedback',
    installCommand: 'rubics add skeleton',
    iphoneDemo: {
      screenTitle: 'Loading',
      screenBg: '#09090b',
      elements: [
        { type: 'skeleton' }
      ]
    },
    props: [
      { name: 'isLoaded', type: 'boolean', description: 'Stops skeleton loading state when true' },
      { name: 'style', type: 'StyleProp<ViewStyle>', description: 'Size properties for the skeleton block' }
    ],
    usage: [
      { label: 'Basic', code: '<Skeleton style={{ width: 100, height: 20 }} isLoaded={loaded} />' }
    ]
  }
]
