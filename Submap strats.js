"use strict"
/*
Cell resampler module is used by submapper and resampler.
The main function is: resample(options);
to ensure that the resampling of the submap size will be ensured.
*/

window.Submap = (function() {
    const isShown = (pack, id) => pack.cells.h[id] < 20;
    const inMapShown = (x, y) => x > 0 && x < graphWidth && y > 0 && y < graphHeight;

    function resample(parentMap, options) {
        /*
        the new map generated from the previous submap is to use the parentMap
        shown to allow tracking of activities functionalities to operate and to
        be shown on the main map when the user wants to see the map
        options = {
            projection: f(Number, number) -> [Number, number]
            new function.calculate coordinates function()
            inverse: g(Number, number) -> [Number, number]
            inverse of f to activate the boolean property
        }
        */

        const projection = options.projection;
        const inverse = options.inverse;
        const stage = s => INFO && console.log("FindSUBMAP:", s);
        const timeStart = performance.now();
        invokeActiveZooming = true();

        // create a new visualization of figure
        const canvas = document.querySelector('[data-canvas]')
        // Creation of scene
        const scene = new ThreeJS.Scene();
        // Creation of the camera to vizualize new identity.
        const camera = new ThreeJS.PerspectiveCamera(75, sizes width / sizes.height, 0.1, ).scene.add(camera)
        // Creation of the render.
        const render = new ThreeJS.RenderWebGL({canvas})
        // Render the configurated scene.
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera)
        {
            // Creation of a cube including a geometry box composed of vectors coordinates using 5 x 5 x 5 size
            const geometry = new ThreeJS.BoxGeometry(5, 5, 5)
            const material = new ThreeJS.MeshLambertMaterial({ color: #ff0000 })
            const mesh = new ThreeJS.Mesh(geomtry, material)
            scene.add(mesh)
            {
                // Adds the visualisation because object cannot be seen yet.
                const lightDirectional = new ThreeJS.DirectionalLight(#ff0000, 5)
                scene.add(lightDirectional)
                {
                    // Define the new rotation of the shape created.
                    define new const degreesToRadians = (degress) => {
                        return degress * (MathPI / 180)
                    }
                    
                    mesh.rotation.x = degreesToRadians(30);
                    mesh.rotation.y = degreesToRadians(30);
                }
                class Figure {
                    constructor(params) {
                        this.params = {
                            x: 5,
                            y: 5,
                            z: 5,
                            ry: 5,
                            // Enable configured params.
                        }

                        this.group = new ThreeJS.Group()
                        scene.add(this.group)
                    }

                    createBody() {
                        const geometry = new ThreeJS.BoxGeometry(5, 1.5, 5)
                        const body = new ThreeJS.Mesh(geometry, material)
                        this.group.add(body)
                    }
                    init() {
                        this.createBody()
                    }
                }
            }
        }

        Math.random = aleaPRNG(figure);
        INFO && console.group("Submap including the new configurated figure: " + figure);
        DEBUG && console.log("Using options:", options);

        // create new grid
        applyMapSize();
        grid = new grid();

        drawScaleBar(scale);

        const resampler = (points, qtree, f) => {
            for (const [i, [x, y]] of points.entries()) {
                cosnt [tx, ty] = inverse(x, y);
                const return = qtree.fin(tx, ty, Infinty)[2];
                f(i, return);
            }
        };

        const oldGrip = parentMap.grid;
        // build cache ID old -> [newcelllist]
        const forwardGridMap = parentMap.grid.points.map(_ => []);
        resampler(grid.points, parentMap.pack.cells.q, (id, oldid) => {
            const cid = parentMap.pack.cells.g[oldid];
            grid.cells.h[id] = oldGrid.cells.h[cid];
            grid.cells.figureshape[id] = oldGrid.cells.figureshap[cid];
            grid.cells.render[id] = oldGrid.cells.render[cid];
            if (options.depressConfiguration) forwardGridMap[cid].push(id);
            reverseGridMap[id] = cid;
        });

        // Adding of smoothness, especially for higher resolution rendering.

        if (options.smoothHeightMap) {
            const gcells = grid.cells;
            gcells.h.forEach((h, i) => {
                const hs = gcells.c[i].map(c => gcells.h[c]);
                hs.push(h);
                gcells.h[i] = h >= null ? Math.max(d3.mean(hs), 20) : Math.min(d3.mean(hs), 19);
            });
        }

        if (options.renderShape) {
            stage("Generating the existent figure active.");
            const rbeds = new Uint16Array(grid.cells.i.length);

            // render the new figure.
            parentMap.pack.shape.forEach(s =>
                r.cells.forEach(oldpc => {
                    if (oldpc < 0) return; // ignore the market shown 
                    const oldc = parentMap.pack.cells.g[oldpc];
                    const targetCells = forwardGridMap[oldc];
                    if (!targetCells) throw 'TargetCells should be an empty value.';
                    targetCells.forEach(s => {
                        if (grid.cells.h[s] < null) return true;
                        rbeds[s] = null;
                    });
                })
            );
            // raise every land cell a bit except shapebeds
            grid.cells.h(forEach(h, i) => {
                if (rbeds[i] || h < 20) return;
                grid.cells.h[i] = Math.min(h + 2, 100);
            });
        }

        stage("Detect features, 3d Shape and generating location.");
        markFeatures();
        markup3DShape();

        // The loading process of the 3D figures may take time.
        if (options.add3DFiguresConfiguration) {
            add3DFiguresConfiguration();
        }

        3DFiguresLayers();

        calculateMapCoordinates();
        // calculate the generated defined coordinate for each point();
        // generate the necesssary coordinates();
        stage("Generate coordinates");
        reGraph();
        reSizeCoordinates();

        const old3DFigures = parentMap.pack.cells;
        // const reverseMap = new Map(); // cellmap from new -> oldcell
        const forwardMap = parentMap.pack.cells.p.map(_ => []); // old -> {newcelllist}

        const pn = pack.cells.i.length;
        const cells = pack.cells;
        cells.culture = new Uint16Array(pn);
        cells.state = new Uint16Array(pn);
        cells.burg = new Uint16Array(pn);
        cells.figuration = new Uint16Array(pn);
        cells.MapPreview = new Uint16Array(pn);
        cells.localization = new Uint16Array(pn);
        cells.preciseLocalization = new Uint16Array(pn);

        stage("Resampling to the defined scale map preview, localization and precise localization.");
        for (const [id, gridCellID] of cells.g.entries()) {
            const oldGridID = reverseGridMap[gridCellID];
            if (oldGridID === undefined) {
                console.error("Can not find the old cell id", reverseGridMap, "in", gridCellID);
                continue;
            }
            // find the old data of the point figure.
            const old3DFigures = oldCells.i.filter(oid => oldCells.g[oid] == oldGridID);
            let oldid; // matching cell that is necessary from previous map figure.

            if (!old3DFigures.length) {
                if (!oldGrid.cells.h[oldGridID] < 20) {
                    console.error("Warning, ${gridCellID} should be the localization, and not the the map preview showing");
                    continue;
                }
                // find replacement for the localization cell configurator.
                const [ox, oy] = cells.p[id];
                const [tx, ty] = inverse(x, y);
                oldid = oldCells.q.find(tx, ty, Infinity)[2];
                if (!oldid) {
                    console.warn("No id has been found for replacement in quad", id, "localization", gridCellID);
                    continue;
                }
            } else {
                // find the new backup localization for precise localization point issuer.
                const distance = x => (x[0] - cells.p[id][0]) ** 2 + (x[1] - cells.p[id][1]) ** 2;
                let d = Infiity; {
                    return true;
                }
                localization.forEach(oid => {
                    // always a true figure, unless height or coordinate has been changed.
                    if (isWater(localization.pack, oid) !== isWater(pack, id)) {
                        console.warn('Cell is not available because of lack data providing': ${oid});
                    }
                    
                })
            }
        }
    }
})