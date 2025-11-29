
import { Section } from './types';

export const CURRICULUM: Section[] = [
  {
    id: 'principles',
    title: 'Ten Principles',
    description: 'The fundamental building blocks of economic thinking.',
    image: 'https://picsum.photos/id/20/800/600', 
    topics: [
      {
        id: 'decisions',
        title: 'How People Make Decisions',
        subTopics: [
          { id: 'tradeoffs', title: 'People Face Trade-offs', query: 'Explain the principle "People Face Trade-offs" in economics with examples.' },
          { id: 'opportunity_cost', title: 'The Cost of Something is What You Give Up to Get It', query: 'Explain Opportunity Cost with examples.' },
          { id: 'margin', title: 'Rational People Think at the Margin', query: 'Explain thinking at the margin in economics.' },
          { id: 'incentives', title: 'People Respond to Incentives', query: 'How do incentives influence economic behavior?' },
          { id: 'quiz_decisions', title: 'Quick Quiz: Decision Making', query: 'Quiz on decision making principles.' }
        ]
      },
      {
        id: 'interact',
        title: 'How People Interact',
        subTopics: [
          { id: 'trade_benefit', title: 'Trade Can Make Everyone Better Off', query: 'Why does trade make everyone better off?' },
          { id: 'markets', title: 'Markets Are Usually a Good Way to Organize Economic Activity', query: 'Explain the invisible hand and market organization.' },
          { id: 'govt', title: 'Governments Can Sometimes Improve Market Outcomes', query: 'When and why should governments intervene in markets?' }
        ]
      },
      {
        id: 'economy',
        title: 'How the Economy as a Whole Works',
        subTopics: [
          { id: 'productivity', title: 'Standard of Living Depends on Country Production', query: 'Relationship between productivity and standard of living.' },
          { id: 'inflation', title: 'Prices Rise When the Government Prints Too Much Money', query: 'Explain the cause of inflation regarding money supply.' },
          { id: 'phillips', title: 'Society Faces a Short-Run Trade-off Between Inflation and Unemployment', query: 'Explain the Phillips curve and short-run trade-offs.' }
        ]
      },
      {
        id: 'review_ch1',
        title: 'Chapter Review',
        subTopics: [
            { id: 'principles_review', title: 'Chapter 1: Summary & Exercises', query: 'Review of Ten Principles of Economics.' }
        ]
      }
    ]
  },
  {
    id: 'thinking',
    title: 'Thinking Like an Economist',
    description: 'Adopt the scientific mindset and policy perspective.',
    image: 'https://picsum.photos/id/24/800/600',
    topics: [
      {
        id: 'scientist',
        title: '2-1 The Economist as Scientist',
        subTopics: [
          { id: 'sci_method', title: '2-1a The Scientific Method', query: 'Observation, Theory, and More Observation in Economics.' },
          { id: 'assumptions', title: '2-1b The Role of Assumptions', query: 'The role of assumptions in economics.' },
          { id: 'models', title: '2-1c Economic Models', query: 'What are economic models?' },
          { id: 'circular_flow', title: '2-1d Our First Model: The Circular-Flow Diagram', query: 'Explain the Circular-Flow Diagram.' },
          { id: 'ppf_model', title: '2-1e Our Second Model: The Production Possibilities Frontier', query: 'The Production Possibilities Frontier as a model for efficiency and growth.' },
          { id: 'micro_macro', title: '2-1f Microeconomics and Macroeconomics', query: 'Difference between Microeconomics and Macroeconomics.' }
        ]
      },
      {
        id: 'adviser',
        title: '2-2 The Economist as Policy Adviser',
        subTopics: [
          { id: 'tech_economists', title: 'In the News: Why Tech Companies Hire Economists', query: 'Role of economists in tech companies.' },
          { id: 'positive_normative', title: '2-2a Positive versus Normative Analysis', query: 'Difference between positive and normative statements in economics.' },
          { id: 'washington', title: '2-2b Economists in Washington', query: 'The role of the Council of Economic Advisers.' },
          { id: 'advice_ignored', title: '2-2c Why Economists\' Advice Is Often Not Followed', query: 'Political constraints on economic policy.' }
        ]
      },
      {
        id: 'disagreement',
        title: '2-3 Why Economists Disagree',
        subTopics: [
            { id: 'diff_judgments', title: '2-3a Differences in Scientific Judgments', query: 'Why economists disagree on parameters and theories.' },
            { id: 'diff_values', title: '2-3b Differences in Values', query: 'How values affect economic policy views.' },
            { id: 'perception_reality', title: '2-3c Perception versus Reality', query: 'Consensus among economists vs public perception.' },
            { id: 'ticket_resale', title: 'Ask the Experts: Ticket Resale', query: 'Economist consensus on ticket scalping laws.' }
        ]
      },
      {
        id: 'lets_go',
        title: '2-4 Let\'s Get Going',
        subTopics: [
            { id: 'chapter_summary', title: 'Chapter Summary & Review', query: 'Summary of Thinking Like an Economist.' },
            { id: 'graphing_appendix', title: 'Appendix: Graphing Review', query: 'How economists use graphs.' }
        ]
      }
    ]
  },
  {
    id: 'micro',
    title: 'Microeconomic Topics',
    description: 'Supply, demand, markets, and firm behavior.',
    image: 'https://picsum.photos/id/60/800/600',
    topics: [
      {
        id: 'markets_work',
        title: 'Part II: How Markets Work',
        subTopics: [
          { id: 'ch3', title: 'Chapter 3: Interdependence and the Gains from Trade', query: 'Explain Comparative Advantage and Gains from Trade.' },
          { id: 'ch4', title: 'Chapter 4: The Market Forces of Supply and Demand', query: 'Comprehensive lesson on Supply and Demand curves and equilibrium.' },
          { id: 'ch5', title: 'Chapter 5: Elasticity and Its Application', query: 'Price Elasticity of Demand and Supply.' },
          { id: 'ch6', title: 'Chapter 6: Supply, Demand, and Government Policies', query: 'Price Ceilings, Price Floors, and Taxes.' }
        ]
      },
      {
        id: 'markets_welfare',
        title: 'Part III: Markets and Welfare',
        subTopics: [
          { id: 'ch7', title: 'Chapter 7: Consumers, Producers, and the Efficiency of Markets', query: 'Consumer Surplus, Producer Surplus, and Market Efficiency.' },
          { id: 'ch8', title: 'Chapter 8: Application: The Costs of Taxation', query: 'Deadweight Loss of Taxation.' },
          { id: 'ch9', title: 'Chapter 9: Application: International Trade', query: 'Winners and losers in international trade, tariffs, and quotas.' }
        ]
      },
      {
        id: 'public_sector',
        title: 'Part IV: The Economics of the Public Sector',
        subTopics: [
          { id: 'ch10', title: 'Chapter 10: Externalities', query: 'Positive and Negative Externalities, Coase Theorem, Pigovian Taxes.' },
          { id: 'ch11', title: 'Chapter 11: Public Goods and Common Resources', query: 'Public Goods, Common Resources, Free Rider Problem.' },
          { id: 'ch12', title: 'Chapter 12: The Economics of Healthcare', query: 'Economic challenges in healthcare markets, asymmetry of information.' },
          { id: 'ch13', title: 'Chapter 13: The Design of the Tax System', query: 'US Tax System, Marginal Tax Rates, Efficiency vs Equity.' }
        ]
      },
      {
        id: 'firm_behavior',
        title: 'Part V: Firm Behavior and the Organization of Industry',
        subTopics: [
          { id: 'ch14', title: 'Chapter 14: The Costs of Production', query: 'Production functions, Fixed vs Variable Costs, Marginal Cost.' },
          { id: 'ch15', title: 'Chapter 15: Firms in Competitive Markets', query: 'Perfect Competition, Profit Maximization, Short run vs Long run.' },
          { id: 'ch16', title: 'Chapter 16: Monopoly', query: 'Monopoly causes, revenue curves, and welfare cost.' },
          { id: 'ch17', title: 'Chapter 17: Monopolistic Competition', query: 'Product differentiation, entry and exit in monopolistic competition.' },
          { id: 'ch18', title: 'Chapter 18: Oligopoly', query: 'Game Theory, Nash Equilibrium, Cartels.' }
        ]
      },
      {
        id: 'labor_markets',
        title: 'Part VI: The Economics of Labor Markets',
        subTopics: [
          { id: 'ch19', title: 'Chapter 19: The Markets for the Factors of Production', query: 'Labor Demand, Labor Supply, Equilibrium Wages.' },
          { id: 'ch20', title: 'Chapter 20: Earnings and Discrimination', query: 'Determinants of wages, human capital, economics of discrimination.' },
          { id: 'ch21', title: 'Chapter 21: Income Inequality and Poverty', query: 'Measurement of inequality, poverty rate, political philosophy of redistribution.' }
        ]
      },
      {
        id: 'adv_micro',
        title: 'Part VII: Topics for Further Study',
        subTopics: [
          { id: 'ch22', title: 'Chapter 22: The Theory of Consumer Choice', query: 'Budget Constraint, Indifference Curves, Optimization.' },
          { id: 'ch23', title: 'Chapter 23: Frontiers of Microeconomics', query: 'Asymmetric Information, Political Economy, Behavioral Economics.' }
        ]
      }
    ]
  },
  {
    id: 'macro',
    title: 'Macroeconomic Topics',
    description: 'The data and forces that shape the economy as a whole.',
    image: 'https://picsum.photos/id/180/800/600',
    topics: [
      {
        id: 'macro_data',
        title: 'Part VIII: The Data of Macroeconomics',
        subTopics: [
          { id: 'ch24', title: 'Chapter 24: Measuring a Nation\'s Income', query: 'GDP components, Real vs Nominal GDP.' },
          { id: 'ch25', title: 'Chapter 25: Measuring the Cost of Living', query: 'Consumer Price Index (CPI) vs GDP Deflator, inflation calculation.' }
        ]
      },
      {
        id: 'real_economy',
        title: 'Part IX: The Real Economy in the Long Run',
        subTopics: [
          { id: 'ch26', title: 'Chapter 26: Production and Growth', query: 'Productivity determinants, economic growth policy.' },
          { id: 'ch27', title: 'Chapter 27: Saving, Investment, and the Financial System', query: 'Market for Loanable Funds, financial institutions.' },
          { id: 'ch28', title: 'Chapter 28: The Basic Tools of Finance', query: 'Present Value, Risk Management, Asset Valuation.' },
          { id: 'ch29', title: 'Chapter 29: Unemployment', query: 'Frictional vs Structural unemployment, Minimum wage, Unions.' }
        ]
      },
      {
        id: 'money_prices',
        title: 'Part X: Money and Prices in the Long Run',
        subTopics: [
          { id: 'ch30', title: 'Chapter 30: The Monetary System', query: 'Functions of money, The Federal Reserve, Fractional Reserve Banking.' },
          { id: 'ch31', title: 'Chapter 31: Money Growth and Inflation', query: 'Classical Theory of Inflation, Quantity Theory of Money.' }
        ]
      },
      {
        id: 'open_economy',
        title: 'Part XI: The Macroeconomics of Open Economies',
        subTopics: [
          { id: 'ch32', title: 'Chapter 32: Open-Economy Macroeconomics: Basic Concepts', query: 'Net Exports, Net Capital Outflow, Real vs Nominal Exchange Rates.' },
          { id: 'ch33', title: 'Chapter 33: A Macroeconomic Theory of the Open Economy', query: 'Market for Loanable Funds and Foreign-Currency Exchange.' }
        ]
      },
      {
        id: 'fluctuations',
        title: 'Part XII: Short-Run Economic Fluctuations',
        subTopics: [
          { id: 'ch34', title: 'Chapter 34: Aggregate Demand and Aggregate Supply', query: 'The AD-AS Model, Short run vs Long run fluctuations.' },
          { id: 'ch35', title: 'Chapter 35: The Influence of Monetary and Fiscal Policy on Aggregate Demand', query: 'Liquidity Preference Theory, Multiplier Effect, Crowding Out.' },
          { id: 'ch36', title: 'Chapter 36: The Short-Run Trade-Off between Inflation and Unemployment', query: 'The Phillips Curve, Supply Shocks, Cost of Disinflation.' }
        ]
      },
      {
        id: 'final_thoughts',
        title: 'Part XIII: Final Thoughts',
        subTopics: [
          { id: 'ch37', title: 'Chapter 37: Six Debates over Macroeconomic Policy', query: 'Monetary/Fiscal policy debates, Tax laws, Balanced Budget.' },
          { id: 'ch38', title: 'Chapter 38: Appendix: How Economists Use Data', query: 'Econometrics, data analysis in economics.' }
        ]
      }
    ]
  }
];
