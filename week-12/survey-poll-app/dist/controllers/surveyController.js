"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.get = exports.getAll = exports.welcome = void 0;
const edge_1 = require("@prisma/client/edge");
const zod_1 = __importDefault(require("zod"));
const prisma = new edge_1.PrismaClient();
function welcome(req, res) {
    res.send("Welcome to Survey API!");
}
exports.welcome = welcome;
function getAll(req, res) {
    res.send("Welcome to Survey API!");
}
exports.getAll = getAll;
function get(req, res) {
    res.send("Welcome to Survey API!");
}
exports.get = get;
const createSchema = zod_1.default.object({
    title: zod_1.default.string(),
    questions: zod_1.default.array(zod_1.default.object({
        text: zod_1.default.string(),
        options: zod_1.default.array(zod_1.default.object({
            text: zod_1.default.string(),
        })),
    })),
});
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const validate = createSchema.safeParse(req.body);
        if (!validate.success) {
            return res.status(422).json({ msg: validate.error });
        }
        const survey = yield prisma.surveys.create({
            data: {
                title: req.body.title,
            },
        });
        res.send("Welcome to Survey API!");
    });
}
exports.create = create;
function update(req, res) {
    res.send("Welcome to Survey API!");
}
exports.update = update;
function remove(req, res) {
    res.send("Welcome to Survey API!");
}
exports.remove = remove;
exports.default = {
    welcome,
    getAll,
    get,
    create,
    update,
    remove,
};
