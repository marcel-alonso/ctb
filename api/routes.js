const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

// Posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await loadPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao carregar posts' });
    }
});

router.post('/posts', async (req, res) => {
    try {
        const post = req.body;
        await savePost(post);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar post' });
    }
});

// Comentários
router.get('/comments/:postSlug', async (req, res) => {
    try {
        const comments = await loadComments(req.params.postSlug);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao carregar comentários' });
    }
});

router.post('/comments', async (req, res) => {
    try {
        const comment = {
            ...req.body,
            date: new Date().toISOString()
        };
        await saveComment(comment);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar comentário' });
    }
});

// Newsletter
router.post('/newsletter/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        await addToNewsletter(email);
        res.status(201).json({ message: 'Inscrito com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar inscrição' });
    }
});

// Analytics
router.post('/analytics/pageview', async (req, res) => {
    try {
        await savePageView(req.body);
        res.status(201).json({ message: 'Pageview registrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar pageview' });
    }
});

router.post('/analytics/event', async (req, res) => {
    try {
        await saveEvent(req.body);
        res.status(201).json({ message: 'Evento registrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar evento' });
    }
});

// Funções auxiliares
async function loadPosts() {
    const postsDir = path.join(__dirname, '../content/posts');
    const files = await fs.readdir(postsDir);
    
    const posts = await Promise.all(files.map(async file => {
        const content = await fs.readFile(path.join(postsDir, file), 'utf-8');
        return JSON.parse(content);
    }));

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function savePost(post) {
    const postsDir = path.join(__dirname, '../content/posts');
    await fs.writeFile(
        path.join(postsDir, `${post.slug}.json`),
        JSON.stringify(post, null, 2)
    );
}

async function loadComments(postSlug) {
    const commentsPath = path.join(__dirname, `../data/comments/${postSlug}.json`);
    try {
        const content = await fs.readFile(commentsPath, 'utf-8');
        return JSON.parse(content);
    } catch {
        return [];
    }
}

async function saveComment(comment) {
    const commentsDir = path.join(__dirname, '../data/comments');
    const commentsPath = path.join(commentsDir, `${comment.postSlug}.json`);
    
    let comments = [];
    try {
        const content = await fs.readFile(commentsPath, 'utf-8');
        comments = JSON.parse(content);
    } catch {}

    comments.push(comment);
    await fs.writeFile(commentsPath, JSON.stringify(comments, null, 2));
}

async function addToNewsletter(email) {
    const subscribersPath = path.join(__dirname, '../data/newsletter/subscribers.json');
    let subscribers = [];
    
    try {
        const content = await fs.readFile(subscribersPath, 'utf-8');
        subscribers = JSON.parse(content);
    } catch {}

    if (!subscribers.includes(email)) {
        subscribers.push(email);
        await fs.writeFile(subscribersPath, JSON.stringify(subscribers, null, 2));
    }
}

async function savePageView(pageView) {
    const analyticsDir = path.join(__dirname, '../data/analytics');
    const date = new Date().toISOString().split('T')[0];
    const pageViewsPath = path.join(analyticsDir, `pageviews_${date}.json`);
    
    let pageViews = [];
    try {
        const content = await fs.readFile(pageViewsPath, 'utf-8');
        pageViews = JSON.parse(content);
    } catch {}

    pageViews.push(pageView);
    await fs.writeFile(pageViewsPath, JSON.stringify(pageViews, null, 2));
}

async function saveEvent(event) {
    const analyticsDir = path.join(__dirname, '../data/analytics');
    const date = new Date().toISOString().split('T')[0];
    const eventsPath = path.join(analyticsDir, `events_${date}.json`);
    
    let events = [];
    try {
        const content = await fs.readFile(eventsPath, 'utf-8');
        events = JSON.parse(content);
    } catch {}

    events.push(event);
    await fs.writeFile(eventsPath, JSON.stringify(events, null, 2));
}

module.exports = router;
