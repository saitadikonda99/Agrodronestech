const drones = [
    {
        name: "10L Hexacopter",
        image: "/products/page/10L Hexacopter.jpg",
        description: "A six-rotor drone designed for agricultural applications, equipped with a 10-liter tank for efficient spraying of crops.",
        type: "Drones"
    },
    {
        name: "10L Quadcopter",
        image: "/products/page/10L Quadcopter.jpg",
        description: "A four-rotor drone featuring a 10-liter capacity, suitable for precision agriculture tasks such as targeted spraying.",
        type: "Drones"
    },
    {
        name: "16L Quadcopter",
        image: "/products/page/16L Quadcopter.jpg",
        description: "This quadcopter boasts a 16-liter tank, allowing for extended flight times and coverage in agricultural operations.",
        type: "Drones"
    },
    {
        name: "16L Hexacopter",
        image: "/products/page/16L hexacopter.jpg",
        description: "Combining six rotors with a 16-liter capacity, this drone offers enhanced stability and payload for extensive agricultural tasks.",
        type: "Drones"
    },
    {
        name: "16L Seed Spreader",
        image: "/products/page/16L seed spreader.jpg",
        description: "Designed for efficient seeding, this drone can disperse seeds over large areas with its 16-liter hopper.",
        type: "Drones"
    },
    {
        name: "10L Seed Spreader",
        image: "/products/page/10L seed spreader.jpg",
        description: "A compact seed spreading drone with a 10-liter capacity, ideal for precise seeding in various terrains.",
        type: "Drones"
    }
];

const spareParts = [
    {
        name: "GPS Mount",
        image: "/products/page/gps_mount.jpg",
        description: "A component used to securely attach the GPS module to the drone, ensuring accurate positioning during flight.",
        type: "Spare Parts"
    },
    {
        name: "K++ V2",
        image: "/products/page/k++v2.jpg",
        description: "An advanced flight controller that manages the drone's stability and navigation, enhancing flight performance.",
        type: "Spare Parts"
    },
    {
        name: "Landing Gear",
        image: "/products/page/landing_gear.jpg",
        description: "Provides support during takeoff and landing, protecting the drone's body and components from impact.",
        type: "Spare Parts"
    },
    {
        name: "LED",
        image: "/products/page/led.jpg",
        description: "Lights used for visibility and signaling during drone operation, improving safety and orientation.",
        type: "Spare Parts"
    },
    {
        name: "Nozzle",
        image: "/products/page/nozzle.png",
        description: "An essential part of the spraying system, controlling the dispersion and flow rate of liquids.",
        type: "Spare Parts"
    },
    {
        name: "PDB",
        image: "/products/page/pdb.jpg",
        description: "Power Distribution Board that distributes electrical power from the battery to various components of the drone.",
        type: "Spare Parts"
    },
    {
        name: "Pipe Clamp",
        image: "/products/page/pipe_clamp.jpg",
        description: "Secures pipes or tubes in place within the drone's structure, ensuring stability and proper fluid flow.",
        type: "Spare Parts"
    },
    {
        name: "Power Cable",
        image: "/products/page/power_cable.jpg",
        description: "Connects the power source to the drone's electronic components, ensuring reliable power delivery.",
        type: "Spare Parts"
    },
    {
        name: "Radar Mount",
        image: "/products/page/radar_mount.jpg",
        description: "Holds the radar sensor, aiding in obstacle detection and navigation during flight.",
        type: "Spare Parts"
    },
    {
        name: "Radar Mount 2",
        image: "/products/page/radar_mount_2.jpg",
        description: "An alternative design for mounting radar sensors, providing flexibility in sensor placement.",
        type: "Spare Parts"
    },
    {
        name: "Rear Radar",
        image: "/products/page/rear_radar.png",
        description: "Assists in detecting obstacles behind the drone, enhancing safety during reverse movements.",
        type: "Spare Parts"
    },
    {
        name: "Shock Absorber",
        image: "/products/page/shock_absorber.jpg",
        description: "Reduces vibrations and impacts, protecting sensitive components and ensuring smooth operation.",
        type: "Spare Parts"
    },
    {
        name: "Sprat",
        image: "/products/page/sprat.png",
        description: "A component or accessory related to the drone's spraying system; specific function may vary.",
        type: "Spare Parts"
    },
    {
        name: "T12 RC",
        image: "/products/page/t12_rc.jpg",
        description: "A remote controller model used for operating the drone, offering precise control and functionality.",
        type: "Spare Parts"
    },
    {
        name: "Tank Cover",
        image: "/products/page/tank_cover.jpg",
        description: "Protects the contents of the drone's tank, preventing spillage and contamination during flight.",
        type: "Spare Parts"
    },
    {
        name: "V2 Flight Controller",
        image: "/products/page/V2 flight controller.jpg",
        description: "Manages the drone's flight dynamics and stability, ensuring responsive and controlled maneuvers.",
        type: "Spare Parts"
    },
    {
        name: "White Product",
        image: "/products/page/white.jpg",
        description: "A generic or placeholder product; specific details would be needed for an accurate description.",
        type: "Spare Parts"
    },
    {
        name: "Wires Partition",
        image: "/products/page/wires_parition.jpg",
        description: "Organizes and separates wiring within the drone to prevent interference and tangling.",
        type: "Spare Parts"
    },
    {
        name: "X6 Motor",
        image: "/products/page/X6 motors.jpg",
        description: "A motor model compatible with certain drone configurations, providing reliable thrust and performance.",
        type: "Spare Parts"
    },
    {
        name: "X6 Propellers",
        image: "/products/page/x6_props.png",
        description: "Propellers designed for the X6 motor, offering optimal lift and efficiency during flight.",
        type: "Spare Parts"
    },
    {
        name: "X8 Motor",
        image: "/products/page/x8_motor.png",
        description: "A more powerful motor option for drones requiring additional thrust and payload capacity.",
        type: "Spare Parts"
    },
    {
        name: "XT 90 Plug",
        image: "/products/page/XT_90 plug.jpg",
        description: "A type of connector used for high-current power connections, ensuring secure and efficient power transfer.",
        type: "Spare Parts"
    },
    {
        name: "3 Port Adapter",
        image: "/products/page/3port_adapter.jpg",
        description: "Allows multiple connections, possibly for charging or data transfer, enhancing the drone's versatility.",
        type: "Spare Parts"
    },
    {
        name: "5L Motor",
        image: "/products/page/5l_motor.jpg",
        description: "Likely refers to a motor designed for drones with a 5-liter capacity, balancing power and efficiency.",
        type: "Spare Parts"
    },
    {
        name: "8L Motor",
        image: "/products/page/8l_motor.png",
        description: "Suitable for drones with an 8-liter capacity, offering balanced power and performance for various tasks.",
        type: "Spare Parts"
    },
    {
        name: "10L Tank",
        image: "/products/page/10L_tank.jpg",
        description: "A replacement or additional tank with a 10-liter capacity for liquid storage during spraying operations.",
        type: "Spare Parts"
    },
    {
        name: "Battery Belt",
        image: "/products/page/battery_belt.jpg",
        description: "Secures the battery in place during flight operations, preventing movement and ensuring consistent power delivery.",
        type: "Spare Parts"
    },
    {
        name: "Battery Board",
        image: "/products/page/battery_board.jpg",
        description: "Distributes power from the battery to various drone components, ensuring stable and efficient energy management.",
        type: "Spare Parts"
    },
    {
        name: "Blue Product",
        image: "/products/page/blue.jpg",
        description: "A generic or placeholder product; specific details would be needed for an accurate description.",
        type: "Spare Parts"
    },
    {
        name: "CAN Hub",
        image: "/products/page/can_hub.png",
        description: "Allows multiple CAN (Controller Area Network) devices to communicate within the drone's system, enhancing data exchange and functionality.",
        type: "Spare Parts"
    },
    {
        name: "Charger",
        image: "/products/page/charger.jpg",
        description: "Replenishes the drone's battery power, essential for maintaining flight readiness and extending operational time.",
        type: "Spare Parts"
    },
    {
        name: "Clamps",
        image: "/products/page/clamps.jpg",
        description: "Used to secure various components or cables within the drone, ensuring stability and organization.",
        type: "Spare Parts"
    },
    {
        name: "Drone Leg",
        image: "/products/page/drone_leg.jpg",
        description: "Supports the drone during landing and takeoff, providing stability and protecting the underside from damage.",
        type: "Spare Parts"
    },
    {
        name: "Filter",
        image: "/products/page/filter.jpg",
        description: "Removes impurities from liquids or air within the drone's systems, ensuring optimal performance and longevity.",
        type: "Spare Parts"
    },
    {
        name: "Tank Fixing Parts",
        image: "/products/page/fixing_parts_tank.jpg",
        description: "Components used to secure the tank to the drone's frame, ensuring stability during flight operations.",
        type: "Spare Parts"
    },
    {
        name: "Flow Meter",
        image: "/products/page/flow_meter.png",
        description: "Measures the rate of liquid flow during spraying operations, allowing for precise application and monitoring.",
        type: "Spare Parts"
    },
    {
        name: "Forward Radar",
        image: "/products/page/forward_radar.png",
        description: "Assists in detecting obstacles in the drone's flight path, enhancing navigation and safety during operations.",
        type: "Spare Parts"
    }
];

export { drones, spareParts };