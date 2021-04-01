export default interface IItem {
  text: string;
  value?: number;
  type: string;
  onAction?: () => void;
}
