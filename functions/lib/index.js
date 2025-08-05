"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const functions = __importStar(require("firebase-functions"));
const https_1 = require("firebase-functions/v2/https");
const app_1 = require("firebase-admin/app");
const generative_ai_1 = require("@google/generative-ai");
(0, app_1.initializeApp)();
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GEMINI_API_KEY;
exports.chat = (0, https_1.onCall)(async (request) => {
    if (!API_KEY) {
        throw new functions.https.HttpsError('failed-precondition', 'The function must be configured with a Gemini API key.');
    }
    const { history, message } = request.data;
    if (!message) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with one argument "message".');
    }
    const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };
    const safetySettings = [
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: generative_ai_1.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];
    try {
        const chatSession = model.startChat({
            generationConfig,
            safetySettings,
            history: history || [],
        });
        const result = await chatSession.sendMessage(message);
        const response = result.response;
        return { text: response.text() };
    }
    catch (error) {
        console.error(error);
        throw new functions.https.HttpsError('internal', 'Error generating response from AI.');
    }
});
//# sourceMappingURL=index.js.map