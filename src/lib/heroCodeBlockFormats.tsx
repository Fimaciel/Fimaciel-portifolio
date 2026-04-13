import type { ReactNode } from "react";

export interface HeroProfile {
  name: string;
  lvl: string;
  stack: string[];
  rank: string;
  status: string;
}

export interface HeroProfileKeys {
  name: string;
  lvl: string;
  stack: string;
  rank: string;
  status: string;
}

export const CODE_VARIANTS = ["json", "python", "php", "typescript", "javascript", "java", "csharp"] as const;
export type CodeVariant = (typeof CODE_VARIANTS)[number];

const EXT: Record<CodeVariant, string> = {
  json: ".json",
  python: ".py",
  php: ".php",
  typescript: ".ts",
  javascript: ".js",
  java: ".java",
  csharp: ".cs",
};

export function getCodeFileExtension(variant: CodeVariant): string {
  return EXT[variant];
}

const kw = "text-sky-500 dark:text-sky-400";
const prop = "text-primary";
const str = "text-emerald-600 dark:text-emerald-400";
const punct = "text-muted-foreground";

function S({ children }: { children: ReactNode }) {
  return <span className={str}>{children}</span>;
}

function Q(s: string) {
  return <S>&quot;{s}&quot;</S>;
}

function Qk({ name }: { name: string }) {
  return <S>&quot;{name}&quot;</S>;
}

export function renderHeroCode(variant: CodeVariant, profile: HeroProfile, keys: HeroProfileKeys): ReactNode {
  switch (variant) {
    case "json":
      return <JsonBlock profile={profile} k={keys} />;
    case "python":
      return <PythonBlock profile={profile} k={keys} />;
    case "php":
      return <PhpBlock profile={profile} k={keys} />;
    case "typescript":
      return <TsBlock profile={profile} k={keys} />;
    case "javascript":
      return <JsBlock profile={profile} k={keys} />;
    case "java":
      return <JavaBlock profile={profile} k={keys} />;
    case "csharp":
      return <CsharpBlock profile={profile} k={keys} />;
    default:
      return null;
  }
}

function JsonBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  return (
    <>
      <span className={punct}>{"{"}</span>
      {"\n"}
      {"  "}
      <Qk name={k.name} />
      <span className={punct}>: </span>
      {Q(profile.name)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.lvl} />
      <span className={punct}>: </span>
      {Q(profile.lvl)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.stack} />
      <span className={punct}>: [</span>
      {"\n"}
      {profile.stack.map((item, i) => (
        <span key={item}>
          {"    "}
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>,</span> : null}
          {"\n"}
        </span>
      ))}
      {"  "}
      <span className={punct}>],</span>
      {"\n"}
      {"  "}
      <Qk name={k.rank} />
      <span className={punct}>: </span>
      {Q(profile.rank)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.status} />
      <span className={punct}>: </span>
      {Q(profile.status)}
      {"\n"}
      <span className={punct}>{"}"}</span>
    </>
  );
}

function PythonBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  return (
    <>
      <span className={prop}>profile</span>
      <span className={punct}> = {"{"}</span>
      {"\n"}
      {"  "}
      <Qk name={k.name} />
      <span className={punct}>: </span>
      {Q(profile.name)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.lvl} />
      <span className={punct}>: </span>
      {Q(profile.lvl)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.stack} />
      <span className={punct}>: [</span>
      {"\n"}
      {profile.stack.map((item, i) => (
        <span key={item}>
          {"    "}
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>,</span> : null}
          {"\n"}
        </span>
      ))}
      {"  "}
      <span className={punct}>],</span>
      {"\n"}
      {"  "}
      <Qk name={k.rank} />
      <span className={punct}>: </span>
      {Q(profile.rank)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <Qk name={k.status} />
      <span className={punct}>: </span>
      {Q(profile.status)}
      <span className={punct}>,</span>
      {"\n"}
      <span className={punct}>{"}"}</span>
    </>
  );
}

function PhpBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  return (
    <>
      <span className={punct}>&lt;?php</span>
      {"\n\n"}
      <span className={kw}>return</span> <span className={punct}>[</span>
      {"\n"}
      {"  "}
      <span className={str}>&apos;{k.name}&apos;</span>
      <span className={punct}> =&gt; </span>
      <span className={str}>&apos;{profile.name}&apos;</span>
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={str}>&apos;{k.lvl}&apos;</span>
      <span className={punct}> =&gt; </span>
      <span className={str}>&apos;{profile.lvl}&apos;</span>
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={str}>&apos;{k.stack}&apos;</span>
      <span className={punct}> =&gt; [</span>
      {"\n"}
      {profile.stack.map((item, i) => (
        <span key={item}>
          {"    "}
          <span className={str}>&apos;{item}&apos;</span>
          {i < profile.stack.length - 1 ? <span className={punct}>,</span> : null}
          {"\n"}
        </span>
      ))}
      {"  "}
      <span className={punct}>],</span>
      {"\n"}
      {"  "}
      <span className={str}>&apos;{k.rank}&apos;</span>
      <span className={punct}> =&gt; </span>
      <span className={str}>&apos;{profile.rank}&apos;</span>
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={str}>&apos;{k.status}&apos;</span>
      <span className={punct}> =&gt; </span>
      <span className={str}>&apos;{profile.status}&apos;</span>
      <span className={punct}>,</span>
      {"\n"}
      <span className={punct}>];</span>
    </>
  );
}

function TsBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  return (
    <>
      <span className={kw}>export</span> <span className={kw}>const</span>{" "}
      <span className="text-amber-500 dark:text-amber-400">profile</span>
      <span className={punct}> = {"{"}</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.name}</span>
      <span className={punct}>: </span>
      {Q(profile.name)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.lvl}</span>
      <span className={punct}>: </span>
      {Q(profile.lvl)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.stack}</span>
      <span className={punct}>: [</span>
      {"\n"}
      {profile.stack.map((item, i) => (
        <span key={item}>
          {"    "}
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>,</span> : null}
          {"\n"}
        </span>
      ))}
      {"  "}
      <span className={punct}>] </span>
      <span className={kw}>as</span> <span className={kw}>const</span>
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.rank}</span>
      <span className={punct}>: </span>
      {Q(profile.rank)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.status}</span>
      <span className={punct}>: </span>
      {Q(profile.status)}
      <span className={punct}>,</span>
      {"\n"}
      <span className={punct}>{"}"} </span>
      <span className={kw}>as</span> <span className={kw}>const</span>
      <span className={punct}>;</span>
    </>
  );
}

function JsBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  return (
    <>
      <span className={kw}>const</span> <span className="text-amber-500 dark:text-amber-400">profile</span>
      <span className={punct}> = {"{"}</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.name}</span>
      <span className={punct}>: </span>
      {Q(profile.name)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.lvl}</span>
      <span className={punct}>: </span>
      {Q(profile.lvl)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.stack}</span>
      <span className={punct}>: [</span>
      {"\n"}
      {profile.stack.map((item, i) => (
        <span key={item}>
          {"    "}
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>,</span> : null}
          {"\n"}
        </span>
      ))}
      {"  "}
      <span className={punct}>],</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.rank}</span>
      <span className={punct}>: </span>
      {Q(profile.rank)}
      <span className={punct}>,</span>
      {"\n"}
      {"  "}
      <span className={prop}>{k.status}</span>
      <span className={punct}>: </span>
      {Q(profile.status)}
      <span className={punct}>,</span>
      {"\n"}
      <span className={punct}>{"}"}</span>
      <span className={punct}>;</span>
    </>
  );
}

function JavaBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <>
      <span className={kw}>public class</span>{" "}
      <span className="text-amber-500 dark:text-amber-400">Profile</span>
      <span className={punct}> {"{"}</span>
      {"\n\n"}
      {"  "}
      <span className={kw}>private</span> <span className={kw}>String</span>{" "}
      <span className={prop}>{k.name}</span>
      <span className={punct}> = </span>
      {Q(profile.name)}
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>private</span> <span className={kw}>int</span>{" "}
      <span className={prop}>{k.lvl}</span>
      <span className={punct}> = </span>
      <span className={str}>{profile.lvl}</span>
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>private</span> <span className={kw}>String</span>
      <span className={punct}>[]</span> <span className={prop}>{k.stack}</span>
      <span className={punct}> = {"{"}</span>
      {profile.stack.map((item, i) => (
        <span key={item}>
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>, </span> : null}
        </span>
      ))}
      <span className={punct}>{"}"}</span>
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>private</span> <span className={kw}>String</span>{" "}
      <span className={prop}>{k.rank}</span>
      <span className={punct}> = </span>
      {Q(profile.rank)}
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>private</span> <span className={kw}>String</span>{" "}
      <span className={prop}>{k.status}</span>
      <span className={punct}> = </span>
      {Q(profile.status)}
      <span className={punct}>;</span>
      {"\n\n"}
      {"  "}
      <span className={kw}>public</span> <span className={kw}>String</span>{" "}
      <span className="text-amber-500 dark:text-amber-400">get{capitalize(k.name)}</span>
      <span className={punct}>() {"{"}</span>
      {"\n"}
      {"    "}
      <span className={kw}>return</span> <span className={prop}>{k.name}</span>
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={punct}>{"}"}</span>
      {"\n"}
      <span className={punct}>{"}"}</span>
    </>
  );
}

function CsharpBlock({ profile, k }: { profile: HeroProfile; k: HeroProfileKeys }) {
  const pascalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <>
      <span className={kw}>public class</span>{" "}
      <span className="text-amber-500 dark:text-amber-400">Profile</span>
      <span className={punct}> {"{"}</span>
      {"\n"}
      {"  "}
      <span className={kw}>public string</span> <span className={prop}>{pascalize(k.name)}</span>
      <span className={punct}> {"{ get; }"} = </span>
      {Q(profile.name)}
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>public int</span> <span className={prop}>{pascalize(k.lvl)}</span>
      <span className={punct}> {"{ get; }"} = </span>
      <span className={str}>{profile.lvl}</span>
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>public string</span>
      <span className={punct}>[]</span> <span className={prop}>{pascalize(k.stack)}</span>
      <span className={punct}> {"{ get; }"} = [</span>
      {profile.stack.map((item, i) => (
        <span key={item}>
          {Q(item)}
          {i < profile.stack.length - 1 ? <span className={punct}>, </span> : null}
        </span>
      ))}
      <span className={punct}>];</span>
      {"\n"}
      {"  "}
      <span className={kw}>public string</span> <span className={prop}>{pascalize(k.rank)}</span>
      <span className={punct}> {"{ get; }"} = </span>
      {Q(profile.rank)}
      <span className={punct}>;</span>
      {"\n"}
      {"  "}
      <span className={kw}>public string</span> <span className={prop}>{pascalize(k.status)}</span>
      <span className={punct}> {"{ get; }"} = </span>
      {Q(profile.status)}
      <span className={punct}>;</span>
      {"\n"}
      <span className={punct}>{"}"}</span>
    </>
  );
}
