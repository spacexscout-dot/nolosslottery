import { useState, useEffect } from "react";
import imgRectangle from "figma:asset/78eb958f2455e13c665bd41e7fc05f803c0b8e9c.png";
import imgImage238 from "figma:asset/6518f72b0f253b87afd724f87a6a582e44886ff9.png";
import imgImage240 from "figma:asset/b327e89ba6908e319c701e827094039f8fc38e42.png";
import imgPngtreeGoldenCartoonTrophySportAnd71526251 from "figma:asset/372ee6ef9fcf2d0fd0d1b21d22657342afa1de16.png";
import {
  imgGroup1171279670,
  imgEllipse4392,
  imgEllipse4393,
  imgEllipse4394,
  imgEllipse4395,
  imgEllipse4444,
  imgVector325,
  imgGroup1171279652,
} from "./imports/svg-zahtq";

// Types for backend data
interface AppStats {
  happyUsers: string;
  distribution: string;
  lastDraw: {
    amount: string;
    date: string;
  };
  userReward: {
    amount: string;
    currency: string;
  };
}

// Mock API functions - replace with actual backend/smart contract calls
const fetchAppStats = async (): Promise<AppStats> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    happyUsers: "1 million+",
    distribution: "$750,000",
    lastDraw: {
      amount: "$7200",
      date: "7 mar 2024",
    },
    userReward: {
      amount: "$75.00",
      currency: "75 USDC",
    },
  };
};

// Background decoration component
function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Organic flowing gradient - Green to Blue to Purple */}
      <div className="absolute right-0 top-0 w-full h-full">
        <div
          className="w-full h-full"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(144, 238, 144, 0) 0%,
                rgba(144, 238, 144, 0.15) 25%,
                rgba(135, 206, 235, 0.12) 50%,
                rgba(173, 216, 230, 0.10) 70%,
                rgba(221, 160, 221, 0.08) 100%
              ),
              radial-gradient(ellipse 1200px 800px at 85% 20%, 
                rgba(144, 238, 144, 0.25) 0%, 
                rgba(144, 238, 144, 0) 40%
              ),
              radial-gradient(ellipse 1000px 900px at 90% 50%, 
                rgba(135, 206, 235, 0.20) 0%, 
                rgba(135, 206, 235, 0) 45%
              ),
              radial-gradient(ellipse 800px 700px at 95% 80%, 
                rgba(221, 160, 221, 0.15) 0%, 
                rgba(221, 160, 221, 0) 50%
              )
            `,
          }}
        />
      </div>

      {/* Additional soft overlay for depth */}
      <div className="absolute right-0 top-0 w-[80%] h-full">
        <div
          className="w-full h-full opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 1500px 1200px at 100% 40%, 
                rgba(152, 251, 152, 0.08) 0%, 
                transparent 60%
              )
            `,
          }}
        />
      </div>

      {/* Original SVG for structural details */}
      <div className="absolute h-[673px] w-[685.391px] -right-[10%] top-[165px] xl:right-[54px] xl:top-[165px] opacity-20">
        <div className="absolute inset-[-21.01%_-12.55%_-14.59%_-21.27%]">
          <img
            className="block max-w-none size-full"
            src={imgGroup1171279670}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

// Logo component
function Logo() {
  return (
    <div className="flex-shrink-0 w-[55px] h-[55px] relative overflow-hidden">
      <div
        className="absolute w-[55px] h-[51.944px] left-0 top-[1.53px] bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('${imgRectangle}')` }}
      />
    </div>
  );
}

// Navigation menu
function NavigationMenu() {
  const menuItems = [
    "Home",
    "Deposit",
    "Leaderboard",
    "FAQ",
    "Refer",
    "Docs",
  ];

  return (
    <nav className="hidden xl:flex items-center gap-8">
      {menuItems.map((item, index) => (
        <button
          key={item}
          className={`font-['Urbanist'] font-semibold text-[18px] leading-normal transition-colors hover:text-black ${
            index === 0 ? "text-black" : "text-[#979daa]"
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

// Connect wallet button
function ConnectWalletButton() {
  return (
    <button className="bg-gradient-to-r from-[#18c258] to-[#5cc434] px-4 py-2.5 rounded-[12px] font-['Urbanist'] font-semibold text-[18px] text-white leading-normal hover:opacity-90 transition-opacity">
      Connect Wallet
    </button>
  );
}

// Header component
function Header() {
  return (
    <header className="absolute top-8 left-4 right-4 xl:left-[54px] xl:right-[54px] z-50">
      <div className="flex items-center h-[55px] relative">
        {/* Logo positioned on the left */}
        <div className="absolute left-0">
          <Logo />
        </div>
        
        {/* Navigation centered */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu />
        </div>
        
        {/* Connect button positioned on the right */}
        <div className="absolute right-0">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}

// Avatar mask group component
function AvatarMask({
  bgColor,
  image,
  className = "",
}: {
  bgColor: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="w-[50.043px] h-[50.043px] relative"
        style={{
          maskImage: `url('${imgEllipse4392}')`,
          maskSize: "50.043px 50.043px",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        <img
          className="w-full h-full object-cover"
          src={bgColor}
          alt=""
        />
      </div>
      <div
        className="absolute top-[6.369px] left-[2.729px] w-[43.673px] h-[43.673px] bg-center bg-cover"
        style={{
          backgroundImage: `url('${image}')`,
          maskImage: `url('${imgEllipse4392}')`,
          maskSize: "50.043px 50.043px",
          maskRepeat: "no-repeat",
          maskPosition: "-2.729px -6.369px",
        }}
      />
    </div>
  );
}

// User avatars component
function UserAvatars() {
  return (
    <div className="absolute left-4 xl:left-[120px] top-[380px] md:top-[370px] xl:top-[460px] flex items-center">
      <AvatarMask
        bgColor={imgEllipse4393}
        image={imgImage238}
        className="mr-[-19.064px] z-30"
      />
      <AvatarMask
        bgColor={imgEllipse4394}
        image={imgImage240}
        className="mr-[-19.064px] z-20"
      />
      <AvatarMask
        bgColor={imgEllipse4395}
        image={imgImage240}
        className="z-10"
      />
    </div>
  );
}

// Loading skeleton component
function LoadingSkeleton({
  width,
  height,
  className = "",
}: {
  width: string;
  height: string;
  className?: string;
}) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ width, height }}
    />
  );
}

// Statistics card component
function StatCard({
  title,
  value,
  loading,
}: {
  title: string;
  value: string;
  loading: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-['Urbanist'] font-bold text-[#18c258] text-[20px] md:text-[24px] xl:text-[28px] leading-normal">
        {loading ? (
          <LoadingSkeleton width="100px" height="28px" />
        ) : (
          value
        )}
      </div>
      <div className="font-['Urbanist'] font-semibold text-[#979daa] text-[14px] md:text-[16px] xl:text-[18px] leading-normal">
        {title}
      </div>
    </div>
  );
}

// Statistics section
function Statistics({
  stats,
  loading,
}: {
  stats: AppStats | null;
  loading: boolean;
}) {
  return (
    <div className="absolute left-4 xl:left-[120px] top-[450px] md:top-[440px] xl:top-[530px] flex flex-col md:flex-row gap-8 xl:gap-8">
      <StatCard
        title="Happy users"
        value={stats?.happyUsers || "0"}
        loading={loading}
      />
      <StatCard
        title="Distribution"
        value={stats?.distribution || "$0"}
        loading={loading}
      />
    </div>
  );
}

// Action buttons component
function ActionButtons() {
  return (
    <div className="absolute left-4 xl:left-[120px] top-[300px] md:top-[290px] xl:top-[370px] flex flex-col md:flex-row gap-3 xl:gap-[40px] items-start md:items-center">
      <button className="flex items-center gap-2.5 group">
        <div className="w-2 h-2 relative">
          <img
            className="w-full h-full"
            src={imgEllipse4444}
            alt=""
          />
        </div>
        <span className="font-['Urbanist'] font-semibold text-[14px] xl:text-[16px] text-black underline decoration-solid leading-normal group-hover:opacity-80 transition-opacity">
          Learn more
        </span>
      </button>

      <button className="bg-gradient-to-r from-[#18c258] to-[#5cc434] px-8 xl:px-12 py-2.5 xl:py-3 rounded-[12px] font-['Urbanist'] font-semibold text-[14px] xl:text-[16px] text-white leading-normal hover:opacity-90 transition-opacity">
        Deposit
      </button>
    </div>
  );
}

// Glass card wrapper
function GlassCard({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div
      className={`backdrop-blur-[2.175px] bg-[rgba(255,255,255,0.64)] rounded-[13.051px] overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Chart card component
function ChartCard() {
  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <GlassCard className="absolute right-4 xl:right-[54px] top-[260px] md:top-[280px] xl:top-[255px] w-[280px] md:w-[320px] xl:w-[362.161px] h-[160px] md:h-[180px] xl:h-[195.763px]">
      {/* Chart area */}
      <div className="absolute left-[40px] xl:left-[69.6px] top-[15px] xl:top-[17.4px] w-[180px] md:w-[200px] xl:w-[224.04px] h-[80px] xl:h-[111.476px]">
        <div className="absolute inset-[-1.46%_-0.73%]">
          <img
            className="w-full h-full object-contain"
            src={imgVector325}
            alt="Chart"
          />
        </div>
      </div>

      {/* Day labels */}
      <div className="absolute left-[35px] xl:left-[56.55px] top-[130px] xl:top-[154.44px] flex gap-2 xl:gap-[13.051px]">
        {days.map((day, index) => (
          <div
            key={index}
            className="font-['Urbanist'] font-normal text-[11px] xl:text-[15.226px] text-black leading-[1.4]"
          >
            {day}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

// Last draw card component
function LastDrawCard({
  stats,
  loading,
}: {
  stats: AppStats | null;
  loading: boolean;
}) {
  return (
    <GlassCard className="absolute right-4 xl:right-[54px] top-[120px] md:top-[140px] xl:top-[165px] w-[280px] md:w-[300px] xl:w-[362.161px] h-[88.093px]">
      {/* Left content */}
      <div className="absolute left-[17.4px] top-[17.4px] w-[140px] xl:w-[162.048px]">
        <div className="font-['Urbanist'] font-semibold text-[14px] xl:text-[17.401px] text-black leading-normal mb-[6.525px]">
          Last Draw
        </div>
        {loading ? (
          <LoadingSkeleton width="100px" height="20px" />
        ) : (
          <div className="font-['Urbanist'] font-medium text-[14px] xl:text-[19.576px] text-[#979daa] leading-normal">
            {stats?.lastDraw.date}
          </div>
        )}
      </div>

      {/* Right content */}
      <div className="absolute right-[17.4px] top-[30.45px] text-right">
        {loading ? (
          <LoadingSkeleton width="120px" height="25px" />
        ) : (
          <div className="font-['Urbanist'] font-bold text-[18px] xl:text-[26.102px] text-[#18c258] leading-normal">
            {stats?.lastDraw.amount}
          </div>
        )}
      </div>
    </GlassCard>
  );
}

// Reward card component
function RewardCard({
  stats,
  loading,
}: {
  stats: AppStats | null;
  loading: boolean;
}) {
  return (
    <GlassCard className="absolute right-4 xl:right-[54px] top-[470px] md:top-[490px] xl:top-[460px] w-[280px] md:w-[320px] xl:w-[362.161px] h-[88.093px]">
      {/* Icon */}
      <div className="absolute left-[21.75px] top-[21.75px] w-[45.61px] h-[45.61px]">
        <img
          className="w-full h-full object-contain"
          src={imgGroup1171279652}
          alt="Reward icon"
        />
      </div>

      {/* Middle content */}
      <div className="absolute left-[80.48px] top-[20.66px] flex flex-col gap-[8.701px]">
        <div className="font-['Urbanist'] font-medium text-[14px] xl:text-[17.401px] text-[#979daa] leading-normal">
          Your reward
        </div>
        <div className="font-['Urbanist'] font-semibold text-[14px] xl:text-[19.576px] text-black leading-normal">
          USDC
        </div>
      </div>

      {/* Right content */}
      <div className="absolute right-[17.4px] top-[21.75px] text-right">
        {loading ? (
          <div className="flex flex-col gap-1 items-end">
            <LoadingSkeleton width="60px" height="22px" />
            <LoadingSkeleton width="50px" height="13px" />
          </div>
        ) : (
          <>
            <div className="font-['Urbanist'] font-semibold text-[16px] xl:text-[21.751px] text-black leading-normal">
              {stats?.userReward.amount}
            </div>
            <div className="font-['Urbanist'] font-semibold text-[10px] xl:text-[13.051px] text-[#646d80] leading-normal">
              {stats?.userReward.currency}
            </div>
          </>
        )}
      </div>
    </GlassCard>
  );
}

// Jackpot card component
function JackpotCard() {
  return (
    <GlassCard className="absolute left-1/2 transform -translate-x-1/2 xl:translate-x-0 xl:right-[340px] top-[360px] md:top-[380px] xl:top-[255px] w-[180px] xl:w-[243.616px] h-[200px] xl:h-[290.381px]">
      {/* Title */}
      <div className="absolute top-[20px] xl:top-[26.1px] left-1/2 transform -translate-x-1/2 font-['Urbanist'] font-semibold text-[14px] xl:text-[18.489px] text-[#646d80] leading-normal">
        Win Jackpot
      </div>

      {/* Trophy image */}
      <div
        className="absolute top-[45px] xl:top-[57.64px] left-1/2 transform -translate-x-1/2 w-[100px] xl:w-[155.523px] h-[100px] xl:h-[155.523px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${imgPngtreeGoldenCartoonTrophySportAnd71526251}')`,
        }}
      />

      {/* Prize amount section */}
      <div className="absolute bottom-[20px] xl:bottom-[27.45px] left-1/2 transform -translate-x-1/2 text-center">
        <div className="font-['Urbanist'] font-medium text-[10px] xl:text-[13px] text-[#979daa] leading-normal mb-1">
          Upto
        </div>
        <div className="font-['Urbanist'] font-bold text-[18px] xl:text-[24px] text-[#18c258] leading-normal">
          $10,000
        </div>
      </div>
    </GlassCard>
  );
}

// Main hero content
function HeroContent() {
  return (
    <div className="absolute left-4 xl:left-[120px] top-[100px] md:top-[110px] xl:top-[140px] max-w-[320px] md:max-w-[400px] xl:max-w-[519px]">
      <h1 className="font-['Urbanist'] font-semibold text-[24px] md:text-[36px] xl:text-[48px] text-black leading-[1.2] mb-3 md:mb-4 xl:mb-6">
        <span className="text-[#18c258]">Earn </span>
        with no Loss,
        <br />
        No risks involved
      </h1>

      <p className="font-['Urbanist'] font-medium text-[13px] md:text-[16px] xl:text-[18px] text-[#646d80] leading-[1.4] max-w-[280px] md:max-w-[350px] xl:max-w-[420px]">
        Earning made simple than ever with zero loss & risk,
        Deposit now and get exciting rewards
      </p>
    </div>
  );
}

// Main App component
export default function App() {
  const [stats, setStats] = useState<AppStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchAppStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      <BackgroundDecoration />
      <Header />
      <HeroContent />
      <ActionButtons />
      <UserAvatars />
      <Statistics stats={stats} loading={loading} />
      <ChartCard />
      <LastDrawCard stats={stats} loading={loading} />
      <RewardCard stats={stats} loading={loading} />
      <JackpotCard />
    </div>
  );
}