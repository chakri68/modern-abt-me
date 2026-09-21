import { ThemeStage } from "@/components/theme-stage";
import { NightTheme } from "@/themes/night";
import { QuarterlyTheme } from "@/themes/quarterly";
import { PaperbackTheme } from "@/themes/paperback";
import { PreprintTheme } from "@/themes/preprint";
import { ChangelogTheme } from "@/themes/changelog";
import { ZineTheme } from "@/themes/zine";
import { EncyclopaediaTheme } from "@/themes/encyclopaedia";
import { LetterTheme } from "@/themes/letter";

export default function Page() {
  return (
    <ThemeStage
      panels={{
        night: <NightTheme />,
        quarterly: <QuarterlyTheme />,
        paperback: <PaperbackTheme />,
        preprint: <PreprintTheme />,
        changelog: <ChangelogTheme />,
        zine: <ZineTheme />,
        encyclopaedia: <EncyclopaediaTheme />,
        letter: <LetterTheme />,
      }}
    />
  );
}
