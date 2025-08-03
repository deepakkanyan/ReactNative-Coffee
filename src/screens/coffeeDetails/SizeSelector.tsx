import Box from '../../designsystem/components/Box';
import Button from '../../designsystem/components/Button';

type SizeSelectorProps = {
  selectedSize: 'Small' | 'Medium' | 'Large';
  onSizeChange: (size: 'Small' | 'Medium' | 'Large') => void;
};

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  onSizeChange,
}) => {
  return (
    <Box flexDirection="row" justifyContent="space-between" mb="l">
      <Button
        label="S"
        variant={selectedSize === 'Small' ? 'primary' : 'outline'}
        onPress={() => onSizeChange('Small')}
      />
      <Button
        label="M"
        variant={selectedSize === 'Medium' ? 'primary' : 'outline'}
        onPress={() => onSizeChange('Medium')}
      />
      <Button
        label="L"
        variant={selectedSize === 'Large' ? 'primary' : 'outline'}
        onPress={() => onSizeChange('Large')}
      />
    </Box>
  );
};
