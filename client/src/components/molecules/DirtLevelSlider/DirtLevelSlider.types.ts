import { DirtLevel } from "@/types";

export interface DirtLevelSliderProps {
  levels: DirtLevel[];
  selectedLevel: DirtLevel | null;
  onSelect: (level: DirtLevel) => void;
  style?: any;
}

export interface DirtLevelSliderStyles {
  container: any;
  slider: any;
  levelItem: any;
  selectedLevelItem: any;
  levelIcon: any;
  levelName: any;
  selectedLevelName: any;
  levelDescription: any;
  selectedLevelDescription: any;
}
