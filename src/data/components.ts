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
  type: 'button' | 'input' | 'checkbox' | 'slider' | 'otp' | 'text' | 'spacer'
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
  }
]
